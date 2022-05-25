import React from 'react'
import { Drawer } from '@mui/material'
import { deviceData } from '../utils/types'
import { formatStatus } from '../utils/utils'

interface Props {
  open: boolean
  onClose: () => void
  deviceData: deviceData
}
const DrawerComponent: React.FC<Props> = ({ open, onClose, deviceData }) => {
  const slack = deviceData?.operatingParams.slack
  const rotorSpeed = deviceData?.operatingParams.rotorSpeed
  const rotorThreshold = deviceData?.operatingParams.rootThreshold

  return deviceData ? (
    <Drawer className="drawer-parent" open={open} onClose={onClose} anchor="right">
      <div className="drawer-content">
        <h3 className="card-title">{deviceData.asset.alias}</h3>
        <div className={`device-status ${deviceData.status} drawer-badge`}>
          {formatStatus(deviceData.status)}
        </div>
        <div className="device-info drawer-id">
          ID: {deviceData.asset.id.toString()}
        </div>
        <div className="device-info">Created On: {deviceData.timestamp}</div>
        <div className="param-parent">
          <div className="param-title">
            Rotor Speed <div className="param-data">{rotorSpeed.toString()} m/s</div>
          </div>

          <div className="param-title">
            Slack <div className="param-data">{slack.toString()}</div>
          </div>

          <div className="param-title">
            Threshold <div className="param-data">{rotorThreshold.toString()}</div>
          </div>
        </div>
        <hr className='horizontal-break'/>
        <h3 className="card-title">Events</h3>
      </div>
      <div className="device-delete">Delete Device</div>
    </Drawer>
  ) : null
}

export default DrawerComponent
