import '../UI/Theme/main.css'
import React, { useState } from 'react'
import PageHeader from '../Header/PageHeader'
import DevicesParent from '../DeviceCard/DevicesParent'
import DrawerComponent from '../Drawer/Drawer'
import { deviceData, deviceStatus } from '../utils/types'

interface Props {
  store: unknown
}

const Home: React.FC<Props> = ({ store }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [clickedDeviceData, setClickedDeviceData] = useState<deviceData>()
  const [selectedTab, setSelectedTab] = useState<deviceStatus>('ALL')

  const handleDrawer = (action) => {
    setDrawerOpen(action)
  }

  const setDeviceData = (data: deviceData) => {
    setClickedDeviceData(data)
  }

  const setTabSelection = (input: deviceStatus) => {
    setSelectedTab(input)
  }

  return (
    <div className="app-body">
      <PageHeader setTabSelection={setTabSelection} selectedTab={selectedTab}/>
      <DevicesParent
        onDeviceClick={() => handleDrawer(true)}
        setDeviceData={setDeviceData}
        selectedTab={selectedTab}
      />
      <DrawerComponent
        open={drawerOpen}
        onClose={() => handleDrawer(false)}
        deviceData={clickedDeviceData}
      />
    </div>
  )
}

export default Home
