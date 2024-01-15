import { Project } from "./Project";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  onEditClick: (project: Project) => void;
}

function formatDescription(description: string, limit: number) {
  if (description.length > limit) {
    return description.substring(0, limit) + "...";
  }
  return description;
}

function ProjectCard({ project, onEditClick }: ProjectCardProps) {
  return (
    <div className="card">
      <img src={project.imageUrl} alt="project name" />
      <section className="section dark">
        <Link to={"/projects/" + project.id}>
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{formatDescription(project.description, 60)}</p>
          <p>Budget : {project.budget.toLocaleString()}</p>
        </Link>
        <button className="bordered" onClick={() => onEditClick(project)}>
          <span className="icon-edit"></span>
          Edit
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;
