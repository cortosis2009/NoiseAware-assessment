import React, { useEffect, useState } from 'react'
import DeviceCard from './DeviceCard'
import { deviceData } from '../utils/types'

interface Props {
  onDeviceClick: () => void
  setDeviceData: (data: deviceData) => void
}

const DevicesParent: React.FC<Props> = ({ onDeviceClick, setDeviceData }) => {
  const [responseData, setResponseData] = useState<deviceData[]>([])

  useEffect(() => {
    getDeviceData()
  }, [])

  const getDeviceData = async () => {
    const response = await fetch(
      'https://jsonmock.hackerrank.com/api/iot_devices/search',
    )
    const json = await response.json()

    setResponseData(json.data)
  }

  const handleDeviceClick = (data: deviceData) => {
    onDeviceClick()
    setDeviceData(data)
  }

  return (
    <table className="devices-parent">
      {responseData.map((item: deviceData) => {
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
