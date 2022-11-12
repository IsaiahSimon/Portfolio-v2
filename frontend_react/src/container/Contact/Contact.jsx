import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AppWrap, MotionWrap } from '../../wrapper';

// Helper func: Encode the form the way Netlify expects it (takes an object and turns it into a query string)
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .max(500, 'Must be 500 characters or less')
        .required('Required'),
    }),
    onSubmit: (values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-demo", ...values })
        })
          .then(() => {
            alert(JSON.stringify(values));
            actions.resetForm()
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false))
      }
  });
  return (
    <form
      className='form'
      name='Contact'
      action="#"
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      data-netlify='true'
      data-netlify-honeypot='bot-field'
    >
      <input type="hidden" name="form-name" value="Contact" />
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="message">Message</label>
      <input
        id="message"
        name="message"
        type="textarea"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? (
        <div>{formik.errors.message}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'APP__FOOTER'),
  'contact',
  'bg-neutral',
);
