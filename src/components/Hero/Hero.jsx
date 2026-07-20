import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-intro">
          👋 Hello, I'm
        </p>

        <h1>
          Divyanshu
        </h1>

        <h2>
          Full Stack Developer
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
  );
}

export default Hero;