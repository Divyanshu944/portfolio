import "./Footer.css";
import FadeIn from "../animations/FadeIn";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <FadeIn direction="up">
    <footer className="footer">
      <h2>Divyanshu</h2>

      <p className="footer-role">Full Stack Developer | MERN Stack Developer</p>

      <p className="footer-text">
        Building modern, responsive and scalable web applications with clean
        code and user-focused design.
      </p>

      <div className="footer-social">
        <a
          href="https://github.com/Divyanshu944"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/divyanshupal2740/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:paldivyanshu944@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://instagram.com/YOUR-INSTAGRAM"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Divyanshu. Made with <FaHeart className="heart" /> using React.
        </p>
      </div>
    </footer>
    </FadeIn>
  );
}

export default Footer;
