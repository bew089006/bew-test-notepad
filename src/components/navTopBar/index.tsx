import React from 'react'
import { useFormikContext, withFormik, Form, Field } from 'formik'
import styles from './index.module.scss'
// import { Redirect } from 'react-router'

const MainPage: React.FC = (props: any) => {
  const { values, errors, touched } = useFormikContext<any>()

  return (
    <nav>
      <div>icon</div>
    </nav>
  )
}

const EnhancedMainPage = withFormik({
  mapPropsToValues: (props) => ({
    //
  }),
  validate: (values) => {
    //
  },
  handleSubmit: (values, { setFieldValue }) => {
    // console.log(values)
  },
})(MainPage)

export default EnhancedMainPage
