import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="HEAD-TEXT text-5xl text-primary">Take a coffee & <span className='TEXT-GRADIENT'>chat with me</span></h2>

      <div className="APP__FOOTER-CARDS">
        <div className="APP__FOOTER-CARD ">
          <img src={images.email} alt="email" />
          <a href="mailto:isimon.dev@gmail.com" className="P-TEXT">isimon.dev@gmail.com</a>
        </div>
        {/* <div className="APP__FOOTER-CARD">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="P-TEXT">+1 (123) 456-7890</a>
        </div> */}
      </div>
      {!isFormSubmitted ? (
        <div className="APP__FOOTER-FORM APP__FLEX mt-4">
          <div className="APP__FLEX">
            <input className="P-TEXT" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="APP__FLEX">
            <input className="P-TEXT" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="P-TEXT"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="P-TEXT" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
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
  MotionWrap(Footer, 'APP__FOOTER'),
  'contact',
  'bg-neutral',
);
