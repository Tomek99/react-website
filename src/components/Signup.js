import React from 'react';
import '../styles/Signup.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too long!').required('Required'),

  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string()
    .required('Required.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')

})



function Signup() {
  return (
    <div className='signup-main'>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}

        validationSchema={SignupSchema}

        onSubmit={(values, { resetForm }) => {
          console.log(values)

          resetForm();
        }}
      >
        {
          ({ errors, touched }) => (
            <Form>

              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}

              <label htmlFor="firstName">Last Name</label>
              <Field name="lastName" />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}

              <label htmlFor="firstName">Password</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}

              <label htmlFor="firstName">E-mail</label>
              <Field name="email" />
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : null}

              <button type="submit">Submit</button>
            </Form>
          )
        }

      </Formik>
    </div >
  )
}

export default Signup