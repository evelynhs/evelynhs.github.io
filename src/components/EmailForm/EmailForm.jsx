import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";

function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submit formData=", formData);

    emailjs
    .sendForm('service_wdyw285', 'template_66bs0yq', form.current, {
      publicKey: 'BAuJjHMa7I7FEQ_aD',
    })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          e.target.reset();
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="contactpage">
      <div className="links">
        <h3>Feel free to email me at evelynhs@tamu.edu or use the contact form :)</h3>

        <a className="social" href="https://www.linkedin.com/in/evelynhsiao/" target="_blank">[ linkedin ]</a>
        <a className="social" href="https://github.com/evelynhs" target="_blank">[ github ]</a>
      </div>
      <div className="emailform">
        {submitted && <div>Thank you!</div>}
        <form onSubmit={handleSubmit}>
          
          <label htmlFor="name">Name <span className="redtext">*</span></label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          
          <label htmlFor="email">Email <span className="redtext">*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          
          <label htmlFor="message">Message <span className="redtext">*</span></label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default EmailForm;