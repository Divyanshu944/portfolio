import "./Contact.css";
import FadeIn from "../animations/FadeIn";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
    const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_s9ec4bj",
      "template_pda3o4w",
      form.current,
      "AZgiA0vLk6k0eaXq1"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
         console.log("EmailJS Error:", error);
        alert("Failed to send message.");
        console.log(error.text);
      }
    );
};

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

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required

          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
           rows="6"
           name="message"
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