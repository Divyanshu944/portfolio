import "./Background.css";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVite,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiDocker,
  SiRedux,
} from "react-icons/si";

function Background() {
  const icons = [
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiPostman,
    SiVite,
    SiTailwindcss,
    SiTypescript,
    SiFirebase,
    SiDocker,
    SiRedux,
  ];

  return (
    <div className="background">
      {icons.map((Icon, index) => (
        <Icon key={index} className={`icon icon${index + 1}`} />
      ))}
    </div>
  );
}

export default Background;