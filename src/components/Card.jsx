import React from "react";

const Card = ({ image, github, url, title, description }) => {
  return (
    <div>
      <div className="project-card">
        <div className="top">
          <img src={image} alt="" width="100%" />
        </div>
        <div className="bottom container">
          <div className="links">
            <a href={github} title="git">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={url} title="chrome">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
