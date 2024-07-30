import React from 'react'
import './Contact.css'
import { FaRegMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
export default function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4da0384b-4b3d-41aa-9542-80001f2f2925");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <FaRegMessage /></h3>
        <p>feel free to reach out through contact form or find our contact information below.your feedback , suggestions are important to us.</p>
        <ul>
            <li> <MdEmail />Contact@ankit.com </li>
            <li><FaPhone /> 1234567890 </li>
            <li> <FaLocationDot />77 Massachusetts Ave,Cambridge <br/>MA 02139, United States </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter Your Mobile Number' />
            <label>Write Your Messages here</label>
            <textarea name="message" rows='6' placeholder='Enter Your Message' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit Now<FaArrowRight /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

