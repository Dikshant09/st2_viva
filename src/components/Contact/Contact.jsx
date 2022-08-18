import React, { useState } from "react";
import axios from "axios";
import { images } from "../../constants";
import "./Contact.scss";
import { toast } from "react-toastify";
const API_URL = '/api/';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isFromSubmitted, setIsFromSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    setLoading(true);

    // For Storing message.
    const contact = {
      // _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    if(name === "" || email === "" || email.length <= 10 || message.length <= 10){
      setLoading(false);
      toast.error('Please enter valid email and message must be at least 10 characters long.');
      return ;
    }
    
    if(!email.includes("@")){
      toast.error('Please enter a valid email address');
      return ;
    }

    try{
      await axios.post(API_URL, contact);
      const data = await axios.get(API_URL);
      console.log(data)
      setIsFromSubmitted(true);
    }catch(error){
      toast.error('Message not sent');
      return ;
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="head-text" style={{ marginTop: '1.5rem', marginLeft: '1.5rem' }}>Take a Coffee & chat with me</h2>

      <div className="app__contact-cards app__flex">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:09gmail09@gmail.com" className="p-text">
            Hello@Dikshant.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+(91) 930 602 9268" className="p-text">
            +(91) 930 602 9268
          </a>
        </div>
      </div>

      {!isFromSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
              />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
              />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you, for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};

export default Contact;
