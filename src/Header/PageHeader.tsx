import React from 'react'
import { deviceStatus } from '../utils/types'
import SearchField from './SearchField'
import TabBar from './TabBar'

interface Props {
  setTabSelection: (input: deviceStatus) => void
  selectedTab: deviceStatus
}

const PageHeader: React.FC<Props> = ({setTabSelection, selectedTab}) => {
  return (
    <div className="page-title-parent">
      <div className="title-search-parent">
        <h1 className="app-title-text">Devices</h1>
        <SearchField />
      </div>
      <TabBar setTabSelection={setTabSelection} selectedTab={selectedTab}/>
    </div>
  )
}

export default PageHeader
