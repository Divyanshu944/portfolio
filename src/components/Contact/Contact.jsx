import "./Contact.css";
import FadeIn from "../animations/FadeIn";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <FadeIn direction="right">
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <p className="contact-subtitle">
        I'm currently looking for Full Stack Developer opportunities.
        Whether you have a project, internship, or full-time role,
        I'd love to connect with you.
      </p>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>paldivyanshu944@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 XXXXXXXXXX</p>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Location</h3>
              <p>Noida, Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="social-buttons">

            <a
              href="https://github.com/Divyanshu944"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/divyanshupal2740/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

          <a href="/resume.pdf" className="resume-btn" download>
            <FaFileDownload />
            Download Resume
          </a>

        </div>

        {/* Right Side */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
    </FadeIn>
  );
}

export default Contact;