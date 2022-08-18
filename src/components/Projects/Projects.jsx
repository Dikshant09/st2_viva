import React from "react";
import Project from "../Project/Project";
import projects from "./projectData";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects-preview">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
