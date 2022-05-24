import React, { useEffect, useState } from 'react'
import DeviceCard from './DeviceCard'
import { deviceData } from '../utils/types'

const DevicesParent = () => {
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

  return (
    <table className="devices-parent">
      {responseData.map((item: deviceData) => {
        return (
          <tr key={Math.random()}>
            <DeviceCard
              status={item.status}
              title={item.asset.alias}
              id={item.asset.id}
              createdDate={item.timestamp}
            />{' '}
          </tr>
        )
      })}
    </table>
  )
}

export default DevicesParent
