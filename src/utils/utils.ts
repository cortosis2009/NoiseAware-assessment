import { deviceStatus } from "./types"

export const formatStatus = (status: deviceStatus) => {
    let tempStatus = status.toLocaleLowerCase()
    return tempStatus.charAt(0).toUpperCase() + tempStatus.slice(1)
  }