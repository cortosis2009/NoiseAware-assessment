import React from 'react'
import { deviceStatus } from '../utils/types'
import { Tab, Tabs } from '@mui/material'

interface Props {
  setTabSelection: (input: deviceStatus) => void
  selectedTab: deviceStatus
}

const TabBar: React.FC<Props> = ({setTabSelection, selectedTab}) => {

  const getClassName = (key: deviceStatus) => {
      return selectedTab === key ? 'tab selected' : 'tab'
  }

  return (
    <>
      <Tabs className="tab-parent">
        <Tab
          className={getClassName('ALL')}
          label="All"
          onClick={() => setTabSelection('ALL')}
        ></Tab>
        <Tab
          className={getClassName('MALFUNCTIONING')}
          label="Malfunction"
          onClick={() => setTabSelection('MALFUNCTIONING')}
        ></Tab>
        <Tab
          className={getClassName('STOPPED')}
          label="Stopped"
          onClick={() => setTabSelection('STOPPED')}
        ></Tab>
        <Tab
          className={getClassName('RUNNING')}
          label="Running"
          onClick={() => setTabSelection('RUNNING')}
        ></Tab>
      </Tabs>
    </>
  )
}

export default TabBar
