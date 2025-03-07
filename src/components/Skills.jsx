import React from "react";
import Title from "./Title";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Title title={"Skills"} />
      <div className="container flex skills-container">
        <div>
          <i
            className="fa-brands fa-html5"
            style={{
              color: "orange",
            }}
          ></i>
          <span>HTML</span>
        </div>
        <div>
          <i
            className="fa-brands fa-css3-alt"
            style={{
              color: "blue",
            }}
          ></i>
          <span>CSS</span>
        </div>
        <div>
          <i
            className="fa-brands fa-square-js"
            style={{
              color: "yellow",
            }}
          ></i>
          <span>JS</span>
        </div>
        <div>
          <i className="fa-brands fa-square-github"></i>
          <span>Github</span>
        </div>
        <div>
          <i
            className="fa-brands fa-figma"
            style={{
              color: "purple",
            }}
          ></i>
          <span>Figma</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
