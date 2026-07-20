import "./Experience.css";

function Experience() {
  const timeline = [
  {
    type: "Experience",
    icon: "💻",
    title: "Full Stack Developer",
    company: "TrayiaStats",
    duration: "1.4 Year",
    description:
      "Worked as a Full Stack Developer on the real-world project 'ZunaDesk', a Jira-like project management application. Developed responsive user interfaces using React.js, built RESTful APIs with Node.js and Express.js, integrated MongoDB databases, implemented authentication, fixed bugs, optimized application performance, and collaborated with the development team using Git and Agile methodologies.",
  },
  {
    type: "Internship",
    icon: "🚀",
    title: "Frontend Developer Intern",
    company: "Times Internet",
    duration: "6 Months",
    description:
      "Worked as a Frontend Developer Intern, developing responsive web pages and reusable UI components using HTML, CSS, JavaScript, and React.js. Assisted senior developers in building internal projects, fixing UI bugs, improving user experience, and integrating frontend interfaces with backend APIs.",
  },
  {
    type: "Certification",
    icon: "📜",
    title: "Full Stack Development Certification",
    company: "Training Basket",
    duration: "Completed",
    description:
      "Successfully completed an industry-oriented Full Stack Development program covering HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, REST APIs, Git, GitHub, responsive web design, and deployment of full-stack applications.",
  },
  {
    type: "Education",
    icon: "🎓",
    title: "Bachelor of Technology (B.Tech)",
    company: "MGM College, Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    duration: "2020 – 2024",
    description:
      "Pursuing a Bachelor of Technology with a strong focus on software development, web technologies, database management systems, data structures, algorithms, and modern full-stack application development.",
  },
];

  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Professional Journey</h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              {item.icon}
            </div>

            <div className="timeline-content">
              <span className="timeline-badge">
                {item.type}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <span className="timeline-date">
                {item.duration}
              </span>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;