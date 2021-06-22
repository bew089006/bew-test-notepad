import React from 'react'
import { useFormikContext, withFormik, Form, Field } from 'formik'
import ContentComponant from './components/contentComponant'
import NavSideBar from './components/navSideBar'
import NavTopBar from './components/navTopBar'
import styles from './app.module.scss'

function App() {
  const { values, errors, touched } = useFormikContext<any>()

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
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
