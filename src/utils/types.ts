export type deviceStatus = 'MALFUNCTIONING' | 'STOPPED' | 'RUNNING'

export type deviceData = {
  asset: {
    alias: String
    id: Number
  }
  id: Number
  operatingParams: {
    rotorThreshold: Number
    rotorSpeed: Number
    slack: Number
  }
  status: deviceStatus
  timestamp: String
}
