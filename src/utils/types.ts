export type deviceStatus = 'MALFUNCTIONING' | 'STOPPED' | 'RUNNING' | 'ALL'
export type deviceData = {
  asset: {
    alias: String
    id: Number
  }
  id: Number
  operatingParams: {
    rootThreshold: Number
    rotorSpeed: Number
    slack: Number
  }
  status: deviceStatus
  timestamp: String
}
