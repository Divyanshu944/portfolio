import "./LoadingScreen.css";
import { useEffect, useState } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiJavascript,
  SiGit,
  SiGithub,
  SiHtml5,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostman,
  SiVite,
} from "react-icons/si";

function LoadingScreen() {
  const icons = [
    <SiReact />,
    <SiVite />,
    <SiJavascript />,
    <SiHtml5 />,
    <SiTailwindcss />,
    <SiNodedotjs />,
    <SiExpress />,
    <SiPython />,
    <SiMongodb />,
    <SiMysql />,
    <SiGit />,
    <SiGithub />,
    <SiPostman />,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 100);

    return () => clearInterval(interval);
  });

  return (
    <div className="loading-screen">
      <div className="loader-content">
        <div className="loader-logo">{icons[index]}</div>

        <h1>Divyanshu</h1>

        <p>Full Stack Developer</p>

        <div className="loading-bar">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
