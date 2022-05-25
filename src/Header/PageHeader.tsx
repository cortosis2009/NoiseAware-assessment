import React from 'react'
import SearchField from './SearchField'
import TabBar from './TabBar'

const PageHeader = () => {
  return (
    <div className="page-title-parent">
      <div className="title-search-parent">
        <h1 className="app-title-text">Devices</h1>
        <SearchField />
      </div>
      <TabBar/>
    </div>
  )
}

export default PageHeader
