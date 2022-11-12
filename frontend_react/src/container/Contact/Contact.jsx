import React, {useState} from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import Label from "./Label";

// Helper func: Encode the form the way Netlify expects it (takes an object and turns it into a query string)
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  message: Yup.string()
    .max(500, 'Must be 500 characters or less')
    .required('Required'),
});



const Contact = () => {
  const submitForm = async (values, formik) => {
    console.log(values);
    try {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values })
      })
        .then(() => {
          console.log(JSON.stringify(values));
          formik.resetForm()
        })
        .finally(() => formik.setSubmitting(false))
    } catch (error) {
      alert(error.message);
    }
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  }

  return (
    <>
      <h2 className="HEAD-TEXT text-5xl text-primary">Have a <span className='TEXT-GRADIENT'>chat with me</span></h2>
      <div className="APP__FOOTER-CARDS">
        <div className="APP__FOOTER-CARD ">
          <img src={images.email} alt="email" />
          <a href="mailto:isimon.dev@gmail.com" className="P-TEXT" target="_blank" rel='noreferrer'>isimon.dev@gmail.com</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <Formik
          initialValues={{ name: '', email: '', message: ''}}
          validationSchema={ContactSchema}
          onSubmit={submitForm}
        >
        {(formik) => (
          <Form
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
            <Label text="Name" required={true} htmlFor="name" />
            <div className="APP__FLEX">
              <Field
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="P-TEXT"
                placeholder="Your Name"
              ></Field>
              <ErrorMessage
                component="div"
                className="text-red-700"
                name="name"
              />
              {/* {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null} */}
            </div>

            {/* Email Input */}
            <Label text="Email" required={true} htmlFor="email" />
            <div className="APP__FLEX">
              <Field
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="P-TEXT"
                placeholder="Your Email"
              ></Field>
              <ErrorMessage
                component="div"
                className="text-red-700"
                name="email"
              />
              {/* {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null} */}
            </div>


            {/* Message Input */}
            <Label text="Message" required={true} htmlFor="message" />
            <div>
              <Field
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="P-TEXT"
                placeholder="Your Message"
                component='textarea'
              ></Field>
              <ErrorMessage
                component="div"
                className="text-red-700"
                name="message"
              />
              {/* {formik.touched.message && formik.errors.message ? (
                <div>{formik.errors.message}</div>
              ) : null} */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="P-TEXT"
              onClick={handleSubmit}
            >
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </Form>
        )}
        </Formik>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'APP__FOOTER'),
  'contact',
  'bg-neutral',
);
