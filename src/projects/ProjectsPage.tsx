import React, { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";

function ProjectsPage() {
  const [projects, setProjects] = useState(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };

  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} onSave={saveProject} />
    </div>
  );
}

export default ProjectsPage;
