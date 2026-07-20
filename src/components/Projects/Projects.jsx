import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import portfolio1 from "../../assets/project_img/portfolio_img_1.jpg";
import portfolio2 from "../../assets/project_img/portfolio_img_2.jpg";
import portfolio3 from "../../assets/project_img/portfolio_img_3.jpg";
import portfolio4 from "../../assets/project_img/portfolio_img_4.jpg";

import gym1 from "../../assets/project_img/gym_img1.jpg";
import gym2 from "../../assets/project_img/gym_img_2.jpg";
import gym3 from "../../assets/project_img/gym_img_3.jpg";
import gym4 from "../../assets/project_img/gym_img_4.jpg";
import gym5 from "../../assets/project_img/gym_img_5.jpg";

import edu1 from "../../assets/project_img/edu_img_1.jpg";
import edu2 from "../../assets/project_img/edu_img_2.jpg";
import edu3 from "../../assets/project_img/edu_img_3.jpg";
import edu4 from "../../assets/project_img/edu_img_4.jpg";


function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      status: "Completed",
      description:
        "A modern and responsive personal portfolio built using React and Vite to showcase my skills, projects, and experience.",
      images: [portfolio1,
              portfolio2,  
              portfolio3,  
              portfolio4,  
             ],
      tech: ["React", "Vite", "CSS", "JavaScript"],
      live: "#",
      github: "#",
    },
    {
      title: "Gym Management Website",
      status: "In Progress",
      description:
        "A full-stack gym management platform featuring member registration, trainer management, workout plans, attendance tracking, and admin dashboard.",
      images: [ gym1,
               gym2,
               gym3,
               gym4,
               gym5
             ],
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "#",
      github: "#",
    },
    {
      title: "Education Learning Platform",
      status: "In Progress",
      description:
        "A modern e-learning platform with student authentication, online courses, quizzes, progress tracking, and an interactive learning dashboard.",
      images: [edu1,
              edu2,
              edu3,
              edu4
            ],
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  className="project-swiper"
>
  {project.images.map((img, index) => (
    <SwiperSlide key={index}>
      <img src={img} alt={project.title} />
    </SwiperSlide>
  ))}
</Swiper>

            <div className="project-content">
              <span
                className={
                  project.status === "Completed"
                    ? "status completed"
                    : "status progress"
                }
              >
                {project.status}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.live}>Live Demo</a>
                <a href={project.github}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;