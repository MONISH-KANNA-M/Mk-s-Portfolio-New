import React, { useState } from "react";
import "./Contact.css";
import mk from "../assets/mk.jpg";
import { FaGithub, FaLinkedin, FaArrowCircleUp, FaEnvelope } from "react-icons/fa";

const CONTACT_EMAIL = "m.monishkanna@outlook.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.suggestion.trim()) {
      setStatus("Please fill all fields before submitting.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.suggestion}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus("Thanks! Your message draft is opened in your email app.");
    setFormData({ name: "", email: "", suggestion: "" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="contact-section reveal">
      <div className="contact-header section-head reveal" style={{ "--delay": "40ms" }}>
        <p className="contact-kicker section-kicker">Get In Touch</p>
 <h2 className="section-title">
          <span>&lt;</span> Contact Me <span>/&gt;</span>
        </h2>        <p className="section-subtitle">
          Interested in working together or have a question? Reach out through the form below or connect with me on social media.
        </p>
      </div>

      <div className="contact-layout reveal" style={{ "--delay": "100ms" }}>
        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="suggestion"
                placeholder="Your Message"
                value={formData.suggestion}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Message <span>✈</span></button>
            {status && <p className="form-status">{status}</p>}
          
          </form>
        </div>

        <div className="contact-side-panel">
          <div className="connect-card">
            <h3>Connect With Me</h3>
            <div className="connect-grid">
              <a href="https://github.com/MONISH-KANNA-M" target="_blank" rel="noopener noreferrer" className="connect-item">
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/monish-kanna-m-54b06a290/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="connect-item">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="connect-item">
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="contact-info-panel">
            <h3>Open to Opportunities</h3>
            <p>
              Currently available for freelance projects, remote positions, and interesting collaborations. Let&apos;s create something amazing together!
            </p>
           
          </div>
        </div>
      </div>

      <footer className="contact-footer reveal" style={{ "--delay": "150ms" }}>
        <img src={mk} className="logo" alt="MK Logo" />
        <h3>©️ CopyRight @Mk</h3>
        
        <FaArrowCircleUp size={36} className="scroll-up" onClick={scrollToTop} />
      </footer>
    </section>
  );
};

export default Contact;
