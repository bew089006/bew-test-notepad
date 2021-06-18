import React from 'react'
import { useFormikContext, withFormik, Form, Field } from 'formik'
import styles from './index.module.scss'
// import { Redirect } from 'react-router'

const ContentComponant: React.FC = (props: any) => {
  const { values, errors, touched } = useFormikContext<any>()

  return <h1>hello</h1>
}

const EnhancedContentComponant = withFormik({
  mapPropsToValues: (props) => ({
    //
  }),
  validate: (values) => {
    //
  },
  handleSubmit: (values, { setFieldValue }) => {
    // console.log(values)
  },
})(ContentComponant)

export default EnhancedContentComponant
