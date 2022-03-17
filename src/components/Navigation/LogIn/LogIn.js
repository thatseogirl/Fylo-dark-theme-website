import { Form, Formik, Field } from 'formik'
import React from 'react'
import Subscribe from '../../Body/Subscribe/Subscribe'
import Footer from '../../Footer/Footer'
import Navigation from '../Navigation'

export default function LogIn() {
  return (
    <div>
      <Navigation />
      <div>
      <Formik>
        <Form>
        <div>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
              ></Field>
            </div>
            <div>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              ></Field>
            </div>
        </Form>
      </Formik>
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}
