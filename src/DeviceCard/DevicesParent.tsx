import React, { useEffect, useState } from 'react'
import DeviceCard from './DeviceCard'
import { deviceData, deviceStatus } from '../utils/types'

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
    setFilteredData(responseData)
  }

  const filterData = () => {
    if(selectedTab !== 'ALL') {
      setFilteredData(responseData.filter(device => device.status.includes(selectedTab)))
    } else setFilteredData(responseData)
  }

  const handleDeviceClick = (data: deviceData) => {
    onDeviceClick()
    setDeviceData(data)
  }

  return (
    <table className="devices-parent">
      {filteredData.map((item: deviceData) => {
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
    </table>
  )
}

export default DevicesParent
