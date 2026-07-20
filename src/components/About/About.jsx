import "./About.css";
import FadeIn from "../animations/FadeIn";
import profile from "../../assets/Divyanshu.jpg";

function About() {
  return (
    <FadeIn direction="left">
      <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt="Divyanshu" />
        </div>

        <div className="about-content">
          <h3>Full Stack Developer</h3>

          <p>
            I am passionate about building modern, scalable and user-friendly
            web applications using React, Node.js, Python and MongoDB. I enjoy
            solving real-world problems and continuously learning new
            technologies.
          </p>

          <div className="skills-list">
            <span>React</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
            <span>Git</span>
          </div>

          <div className="about-stats">
            <div>
              <h4>10+</h4>
              <p>Projects</p>
            </div>

            <div>
              <h4>15+</h4>
              <p>Technologies</p>
            </div>

            <div>
              <h4>1+</h4>
              <p>Years Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </FadeIn>
    
  );
}

export default About;
