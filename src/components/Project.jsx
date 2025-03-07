import React from "react";
import p from "../assets/pp.png";
import Title from "./Title";
import Card from "./Card";

const Project = () => {
  const projects = [
    {
      image: p,
      github: "https://github.com",
      url: "...",
      title: "P1 Personal Portfolio",
      description: "TechStack: Excel, MsWord, Tally, etc",
    },
    {
      image: p,
      github: "https://github.com",
      url: "...",
      title: "P2 Personal Portfolio",
      description: "TechStack: Excel, MsWord, Tally, etc",
    },
    {
      image: p,
      github: "https://github.com",
      url: "...",
      title: "P3 Personal Portfolio",
      description: "TechStack: Excel, MsWord, Tally, etc",
    },
    {
      image: p,
      github: "https://github.com",
      url: "...",
      title: "P4 Personal Portfolio",
      description: "TechStack: Excel, MsWord, Tally, etc",
    },
  ];
  return (
    <section className="projects container" id="projects">
      <Title title={"My Projects"} />

      <div className="grid project-container">
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
