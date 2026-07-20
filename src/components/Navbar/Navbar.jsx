import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="#home">
            Div<span>yanshu</span>
          </a>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <a href="#" className="resume-btn">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;