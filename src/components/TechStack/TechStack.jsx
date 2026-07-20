import "./TechStack.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVite,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

function TechStack() {
  const categories = [
    {
      title: "Frontend",
      techs: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiVite />, name: "Vite" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend",
      techs: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <FaPython />, name: "Python" },
      ],
    },
    {
      title: "Database",
      techs: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
      ],
    },
    {
      title: "Tools",
      techs: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiPostman />, name: "Postman" },
      ],
    },
    {
      title: "Deployment",
      techs: [
        { icon: <SiVercel />, name: "Vercel" },
        { icon: <SiNetlify />, name: "Netlify" },
      ],
    },
  ];

  return (
    <section className="tech-stack-section" id="techstack">
      <h2 className="section-title">Tech Stack</h2>

      {categories.map((category, index) => (
        <div className="category" key={index}>
          <h3>{category.title}</h3>

          <div className="tech-grid">
            {category.techs.map((tech, i) => (
              <div className="tech-card" key={i}>
                <div className="tech-icon">{tech.icon}</div>

                <h4>{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default TechStack;