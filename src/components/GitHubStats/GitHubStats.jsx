import { useEffect, useState } from "react";
import "./GitHubStats.css";
import { FaGithub, FaUsers, FaBook, FaMapMarkerAlt } from "react-icons/fa";

function GitHubStats() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Divyanshu944")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return (
      <section className="github">
        <h2 className="section-title">GitHub</h2>
        <p>Loading GitHub data...</p>
      </section>
    );
  }

  return (
    <section className="github" id="github">
      <h2 className="section-title">GitHub Statistics</h2>

      <div className="github-card">
        <img src={user.avatar_url} alt={user.login} className="github-avatar" />

        <h3>{user.name}</h3>

        <p>@{user.login}</p>

        <div className="github-grid">
          <div>
            <FaBook />
            <span>{user.public_repos}</span>
            <small>Repositories</small>
          </div>

          <div>
            <FaUsers />
            <span>{user.followers}</span>
            <small>Followers</small>
          </div>

          <div>
            <FaUsers />
            <span>{user.following}</span>
            <small>Following</small>
          </div>

          <div>
            <FaMapMarkerAlt />
            <span>{user.location || "India"}</span>
            <small>Location</small>
          </div>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          <FaGithub />
          Visit GitHub
        </a>
      </div>
    </section>
  );
}

export default GitHubStats;
