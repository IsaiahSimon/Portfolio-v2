import React, { useState } from 'react';
import { Formik, Field } from 'formik'

import validationSchema from './validationSchema'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/", {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...values,
          }),
        })
          .then(() => {
            alert('Success!')
            setSubmitting(false)
          })
          .catch(error => {
            alert('Error: Please Try Again!')
            setSubmitting(false)
          })
      }}
      render={({
        touched,
        errors,
        isSubmitting,
        handleSubmit,
        handleReset,
      }) => (
        <form className='form'
          name='contact'
          onSubmit={handleSubmit}
          onReset={handleReset}
          data-netlify='true'
          data-netlify-honeypot='bot-field'
        >
          <div className='field'>
            <label htmlFor='name' className='label'>Name</label>
            <Field
              className='input'
              type='text'
              name='name'
            />
            {touched.name && errors.name && <p className='danger'>{errors.name}</p>}
          </div>
          <div className='field'>
            <label htmlFor='email' className='label'>Email</label>
            <Field
              className='input'
              type='text'
              name='email'
            />
            {touched.email && errors.email && <p className='danger'>{errors.email}</p>}
          </div>
          <div className='field'>
            <label htmlFor='message' className='label'>Message</label>
            <Field
              className='input-textarea'
              name='message'
              component='textarea'
              rows='6'
            />
            {touched.message && errors.message && <p className='danger'>{errors.message}</p>}
          </div>
          <div className='buttons'>
            <input type='reset' value='Clear'
              className='button' />
            <input name='submit' type='submit' disabled={isSubmitting} value='Send Message'
              className='button' />
          </div>
        </form>
      )}
    />
  )
}

export default AppWrap(
  MotionWrap(Contact, 'APP__FOOTER'),
  'contact',
  'bg-neutral',
);


// import React, { useState } from 'react';
// import { useFormik } from "formik";
// import * as Yup from "yup";

// import { images } from '../../constants';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';

// // const Contact = () => {
// //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// //   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   const { username, email, message } = formData;

// //   const handleChangeInput = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = () => {
// //     setLoading(true);

// //     const contact = {
// //       _type: 'contact',
// //       name: formData.username,
// //       email: formData.email,
// //       message: formData.message,
// //     };

// //     client.create(contact)
// //       .then(() => {
// //         setLoading(false);
// //         setIsFormSubmitted(true);
// //       })
// //       .catch((err) => console.log(err));
// //   };

// //   return (
// //     <>
// //       <h2 className="HEAD-TEXT text-5xl text-primary">Have a <span className='TEXT-GRADIENT'>chat with me</span></h2>

// //       <div className="APP__FOOTER-CARDS">
// //         <div className="APP__FOOTER-CARD ">
// //           <img src={images.email} alt="email" />
// //           <a href="mailto:isimon.dev@gmail.com" className="P-TEXT" target="_blank" rel='noreferrer'>isimon.dev@gmail.com</a>
// //         </div>
// //         {/* <div className="APP__FOOTER-CARD">
// //           <img src={images.mobile} alt="phone" />
// //           <a href="tel:+1 (123) 456-7890" className="P-TEXT">+1 (123) 456-7890</a>
// //         </div> */}
// //       </div>
// //       {!isFormSubmitted ? (
// //         <div className="APP__FOOTER-FORM APP__FLEX mt-4">
// //           <div className="APP__FLEX">
// //             <input className="P-TEXT" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
// //           </div>
// //           <div className="APP__FLEX">
// //             <input className="P-TEXT" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
// //           </div>
// //           <div>
// //             <textarea
// //               className="P-TEXT"
// //               placeholder="Your Message"
// //               value={message}
// //               name="message"
// //               onChange={handleChangeInput}
// //             />
// //           </div>
// //           <button type="button" className="P-TEXT" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
// //         </div>
// //       ) : (
// //         <div>
// //           <h3 className="head-text">
// //             Thank you for getting in touch!
// //           </h3>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// const Contact = () => {
//   const [firstName, setFirstName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [email, setEmail] = useState("")

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: ""
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(20, "Must be 20 characters or less")
//         .required("Required"),
//       lastName: Yup.string()
//         .max(20, "Must be 20 characters or less")
//         .required("Required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Required"),
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//     }
//   })
//   console.log(formik.errors);
//   console.log(formik.touched);

//   return (
//     <form name="contact" onSubmit={formik.handleSubmit} data-netlify="true">
//       <div>
//         <input
//           id='firstName'
//           name='firstName'
//           type="text"
//           placeholder='First Name'
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.firstName}
//         />
//         {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}

//         <input
//           id='lastName'
//           name='lastName'
//           type="text"
//           placeholder='Last Name'
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.lastName}
//         />
//         {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}

//         <input
//           id='email'
//           name='email'
//           type="email"
//           placeholder='Email'
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//         />
//       </div>
//       {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}

//       <button type='submit' >Submit</button>
//     </form>
//   )
// }

// export default AppWrap(
//   MotionWrap(Contact, 'APP__FOOTER'),
//   'contact',
//   'bg-neutral',
// );
