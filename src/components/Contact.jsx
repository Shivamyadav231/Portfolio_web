import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "b326e928-fe60-4aa2-9ba1-99930490cced");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div id="contact" className="contact">

      {/* Title */}
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's Talk</h1>

          <div className="contact-detail">
            <p>Email: <strong>shivam91118@gmail.com</strong></p>
          </div>

          <div className="contact-detail">
            <p>Phone: <strong>9118433618</strong></p>
          </div>

          <div className="contact-detail">
            <p>Address: Naharpur Rampur, Jaunpur (UP) 222203</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" required />

          <label>Your Message</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">Submit Now</button>

          {/* Result Message */}
          <p className="result-msg">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
