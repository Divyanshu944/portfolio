import "./Contact.css";
import FadeIn from "../animations/FadeIn";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaEye
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_s9ec4bj",
        "template_pda3o4w",
        form.current,
        "AZgiA0vLk6k0eaXq1",
      )
      .then(() => {
        toast.success("Message sent successfully!");

        form.current.reset();

        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message!");

        setLoading(false);
      });
  };

  return (
    <FadeIn direction="right">
      <section className="contact" id="contact">
        <h2 className="section-title">Get In Touch</h2>

        <p className="contact-subtitle">
          I'm currently looking for Full Stack Developer opportunities. Whether
          you have a project, internship, or full-time role, I'd love to connect
          with you.
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
                <p>+91 8920361789</p>
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

            <div className="resume-buttons">
              <a
                href="/resume/Divyanshu_Resume.pdf"
                className="resume-btn view-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEye />
                View Resume
              </a>

              <a
                href="/resume/Divyanshu_Resume.pdf"
                className="resume-btn download-btn"
                download="Divyanshu_Resume.pdf"
              >
                <FaFileDownload />
                Download Resume
              </a>
            </div>
          </div>
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

            <input type="text" name="subject" placeholder="Subject" required />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </FadeIn>
  );
}

export default Contact;
