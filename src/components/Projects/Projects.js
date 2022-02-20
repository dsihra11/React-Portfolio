import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

function Projects() {
  return (
    <>
      <div className="ProjectWrapper" id="projects" style={{"margin-top" : "50px"}}>
        <div className="Container">
          <div className="SectionTitle" style={{"margin-bottom": "25px"}}>Projects</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
