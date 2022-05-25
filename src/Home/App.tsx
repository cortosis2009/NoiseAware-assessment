import '../UI/Theme/main.css'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import PageHeader from '../Header/PageHeader'
import DevicesParent from '../DeviceCard/DevicesParent'
import DrawerComponent from '../Drawer/Drawer'
import { deviceData } from '../utils/types'

interface Props {
    store: unknown
}

const Home: React.FC<Props> = ({store}) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [clickedDeviceData, setClickedDeviceData] = useState<deviceData>()

  const handleDrawer = (action) => {
    setDrawerOpen(action)
  }

  const setDeviceData = (data: deviceData) => {
    setClickedDeviceData(data)
  }

  return (
    <Provider store={store}>
      <div className="app-body">
        <PageHeader />
        <DevicesParent
          onDeviceClick={() => handleDrawer(true)}
          setDeviceData={setDeviceData}
        />
        <DrawerComponent
          open={drawerOpen}
          onClose={() => handleDrawer(false)}
          deviceData={clickedDeviceData}
        />
      </div>
    </Provider>
  )
}

export default Home
