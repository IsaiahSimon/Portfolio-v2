import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

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
          body: encode({ "form-name": "contact", ...values })
        })
          .then(() => {
            console.log(JSON.stringify(values));
            actions.resetForm()
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false))
      }
  });
  return (
    <>
      <h2 className="HEAD-TEXT text-5xl text-primary">Have a <span className='TEXT-GRADIENT'>chat with me</span></h2>
      <div className="APP__FOOTER-CARDS">
        <div className="APP__FOOTER-CARD ">
          <img src={images.email} alt="email" />
          <a href="mailto:isimon.dev@gmail.com" className="P-TEXT" target="_blank" rel='noreferrer'>isimon.dev@gmail.com</a>
        </div>
      </div>
      <form
        className='APP__FOOTER-FORM APP__FLEX mt-4'
        name='contact'
        action="#"
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >
        <input type="hidden" name="form-name" value="contact" />

        {/* Name Input */}
        <label htmlFor="name">Name</label>
        <div className="APP__FLEX">
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="P-TEXT"
            placeholder="Your Name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email Input */}
        <label htmlFor="email">Email Address</label>
        <div className="APP__FLEX">
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="P-TEXT"
            placeholder="Your Email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Message Input */}
        <label htmlFor="message">Message</label>
        <div>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="P-TEXT"
            placeholder="Your Message"
          />
          {formik.touched.message && formik.errors.message ? (
            <div>{formik.errors.message}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="P-TEXT"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'APP__FOOTER'),
  'contact',
  'bg-neutral',
);
