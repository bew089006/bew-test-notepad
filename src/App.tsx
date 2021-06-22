import React from 'react'
import { useFormikContext, withFormik, Form, Field } from 'formik'
import ContentComponant from './components/contentComponant'
import NavSideBar from './components/navSideBar'
import NavTopBar from './components/navTopBar'

function App() {
  const { values, errors, touched } = useFormikContext<any>()

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

const EnhancedApp = withFormik({
  mapPropsToValues: (props) => ({
    //
  }),
  validate: (values) => {
    //
  },
  handleSubmit: (values, { setFieldValue }) => {
    // console.log(values)
  },
})(App)

export default EnhancedApp
