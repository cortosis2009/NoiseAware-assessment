import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deviceStatus } from '../utils/types'
import { Tab, Tabs } from '@mui/material'

const TabBar = () => {
  const [selected, setSelected] = useState<deviceStatus>('ALL')

  const getClassName = (key: deviceStatus) => {
      return selected === key ? 'tab selected' : 'tab'
  }

  return (
    <>
      <Tabs className="tab-parent">
        <Tab
          className={getClassName('ALL')}
          label="All"
          onClick={() => setSelected('ALL')}
        ></Tab>
        <Tab
          className={getClassName('MALFUNCTIONING')}
          label="Malfunction"
          onClick={() => setSelected('MALFUNCTIONING')}
        ></Tab>
        <Tab
          className={getClassName('STOPPED')}
          label="Stopped"
          onClick={() => setSelected('STOPPED')}
        ></Tab>
        <Tab
          className={getClassName('RUNNING')}
          label="Running"
          onClick={() => setSelected('RUNNING')}
        ></Tab>
      </Tabs>
    </>
  )
}

export default connect()(TabBar)
