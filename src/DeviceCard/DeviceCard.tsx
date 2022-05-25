import React from 'react'
import { deviceStatus } from '../utils/types'
import { formatStatus } from '../utils/utils'

interface Props {
  status: deviceStatus
  title: String
  id: Number
  createdDate: String
}

const DeviceCard: React.FC<Props> = ({ status, title, id, createdDate }) => {

  return (
    <div className="device-card">
      <h3 className="device-card-header">
        <div className="card-title">{title}</div>
        <div className={`device-status ${status}`}>{formatStatus(status)}</div>
      </h3>
      <div className="device-info">ID: {id.toString()}</div>
      <div className="device-info">Created On: {createdDate}</div>
    </div>
  )
}

export default DeviceCard
