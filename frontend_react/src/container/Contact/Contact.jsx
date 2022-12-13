import React, { useState } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import Label from "./Label";

// Helper func: Encode the form the way Netlify expects it (takes an object and turns it into a query string)
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string()
    .max(1000, "Must be 1000 characters or less")
    .required("Required"),
});

const Contact = () => {
  const submitForm = async (values, formik) => {
    console.log(values);
    try {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      })
        .then(() => {
          console.log(JSON.stringify(values));
          formik.resetForm();
        })
        .finally(() => formik.setSubmitting(false));
    } catch (error) {
      alert(error.message);
    }
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      {!isFormSubmitted ? (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={submitForm}
        >
          {(formik) => (
            <Form
              className="decor"
              name="contact"
              action="#"
              onSubmit={formik.handleSubmit}
              onReset={formik.handleReset}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-left-decoration"></div>
              <div className="form-right-decoration"></div>
              <div className="circle"></div>

              <div className="form-inner">
                <h2 className="HEAD-TEXT mb-3 text-5xl text-primary">
                  Have a{" "}
                  <span className="TEXT-BLUE-GRADIENT">Chat with me</span>
                </h2>

                {/* Name Input */}
                <Label text="Name" required={true} htmlFor="name" />
                <div className="">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="form-field-text mt-1"
                    placeholder="Your Name"
                  ></Field>
                  <ErrorMessage
                    component="div"
                    className="validation"
                    name="name"
                  />
                </div>

                {/* Email Input */}
                <Label text="Email" required={true} htmlFor="email" />
                <div className="">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="form-field-text mt-1"
                    placeholder="Your Email"
                  ></Field>
                  <ErrorMessage
                    component="div"
                    className="validation"
                    name="email"
                  />
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
                    className="form-field-text mt-1"
                    placeholder="Your Message"
                    component="textarea"
                  ></Field>
                  <ErrorMessage
                    component="div"
                    className="validation"
                    name="message"
                  />
                </div>

                {/* Form Buttons */}
                <ul className="flex justify-between">
                  <li>
                    <button
                      type="submit"
                      className="P-TEXT"
                      onClick={handleSubmit}
                    >
                      {!loading ? "Send Message" : "Sending..."}
                    </button>
                  </li>
                  <li>
                    <button type="reset" value="Reset">
                      Reset
                    </button>
                  </li>
                </ul>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Contact, "contact", "bg-black");
