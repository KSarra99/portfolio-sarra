import "./Contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import linkedin from "../../img/linkedin.png";
import React, { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(
          "service_lx3kdws",
          "template_xbikln8",
          formRef.current,
          "user_8yImAdFf9ZlTYdRc3DZIy"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
        <h1 className="c-title">Let's discuss your project</h1> 
        <div className="c-info-item">
              <img src={phone} alt="phone" className="c-icon" />
              +216 55 866 219
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={email} alt="email" />
              khmilasarra@gmail.com
            </div>
            
            <div className="c-info-item">
              <img className="c-icon" src={linkedin} alt="linkedin" />
             <a href="https://www.linkedin.com/in/sarra-khmila-748136172/">Visit My LinkedIn account</a> 
            </div>
        </div>

        <div className="c-right">
        <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along with me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
