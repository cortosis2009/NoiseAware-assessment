import React, { useEffect, useState } from 'react'
import DeviceCard from './DeviceCard'
import { deviceData, deviceStatus } from '../utils/types'
import { TablePagination } from '@mui/material'

interface Props {
  onDeviceClick: () => void
  setDeviceData: (data: deviceData) => void
  selectedTab: deviceStatus
}

const DevicesParent: React.FC<Props> = ({
  onDeviceClick,
  setDeviceData,
  selectedTab,
}) => {
  const [responseData, setResponseData] = useState<deviceData[]>([])
  const [filteredData, setFilteredData] = useState<deviceData[]>([])
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  //this can be set lower so that pagination will show with less data, but 10 is the smallest
  // value the pagination component accepts
  useEffect(() => {
    getDeviceData()
  }, [])

  useEffect(() => {
    filterData()
  }, [selectedTab])

  const getDeviceData = async () => {
    const response = await fetch(
      'https://jsonmock.hackerrank.com/api/iot_devices/search',
    )
    const json = await response.json()

    setResponseData(json.data)
    setFilteredData(json.data)
  }

  const filterData = () => {
    if (selectedTab !== 'ALL') {
      setFilteredData(
        responseData.filter((device) => device.status.includes(selectedTab)),
      )
    } else setFilteredData(responseData)
  }

  const handleDeviceClick = (data: deviceData) => {
    onDeviceClick()
    setDeviceData(data)
  }
  const pageChange = (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => {
    setPage(newPage)
  }

  const rowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <div>
      <div className="devices-parent">
        {(rowsPerPage > 0
          ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : filteredData
        ).map((item: deviceData) => {
          return (
            <div key={Math.random()} onClick={() => handleDeviceClick(item)}>
              <DeviceCard
                status={item.status}
                title={item.asset.alias}
                id={item.asset.id}
                createdDate={item.timestamp}
              />
            </div>
          )
        })}
      </div>
      <div className="pagination-parent">
      <TablePagination
        count={filteredData.length}
        onPageChange={pageChange}
        onRowsPerPageChange={rowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage={<span>Show </span>}
        backIconButtonProps={{style: {color: 'white'}}}
        nextIconButtonProps={{style: {color: 'white'}}}
        sx={{
          ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
            fontWeight: "bold",
            color: "white"
          },
          ".MuiInputBase-root": {
            fontWeight: "bold",
            color: "white"
          },
          ".MuiTablePagination-displayedRows" : {
            fontWeight: "bold",
            color: "white"
          }
        }}
      />
      </div>
    </div>
  )
}

export default DevicesParent
