import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import FadeIn from "../animations/FadeIn";

function Hero() {
  return (
    <FadeIn direction="up">
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-intro">
          👋 Hello, I'm
        </p>

        <h1>
          Divyanshu
        </h1>

        <h2 className="typing-text">
      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          2000,
          "Frontend Developer",
          2000,
          "React Developer",
          2000,
          "Backend Developer",
          2000,
          "Python Developer",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
        </h2>

        <p className="hero-description">
          I build modern, responsive and scalable web
          applications using React, Node.js and Python.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="btn-primary">
            Hire Me
          </a>

          <a href="#projects" className="btn-secondary">
            View Projects
          </a>

        </div>

      </div>

    </section>
    </FadeIn>
  );
}

export default Hero;