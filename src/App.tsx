import React from 'react'

import ContentComponant from './components/contentComponant'
import NavSideBar from './components/navSideBar'
import NavTopBar from './components/navTopBar'

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={{ width: '-webkit-fill-available', overflow: 'hidden' }}>
        <NavSideBar />
        <div className="wapperBody">
          <NavTopBar />
          <ContentComponant />
        </div>
      </div>
    </div>
  )
}

export default App
