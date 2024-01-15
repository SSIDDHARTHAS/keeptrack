import { SyntheticEvent, useState } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
  onCancelClick: () => void;
  onSaveClick: (project: Project) => void;
  project: Project;
}

function ProjectForm({
  onCancelClick,
  onSaveClick,
  project: initialProject,
}: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = type === "checkbox" ? checked : value;

    //if input type is number convert the updatedValue string to a +number
    if (type === "number") {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;
    // need to do functional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited +like project.id
    // the spread operator (...) is used to
    // spread the previous project properties and the new change
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSaveClick(project);
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        onChange={handleChange}
        value={project.name}
      />
      <label htmlFor="description">Project Description</label>

      <textarea
        name="description"
        placeholder="enter description"
        onChange={handleChange}
        value={project.description}
      ></textarea>
      <label htmlFor="budget">Project Budget</label>

      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        onChange={handleChange}
        value={project.budget}
      />
      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        name="isActive"
        checked={project.isActive}
        onChange={handleChange}
      />

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span></span>
        <button
          type="button"
          className="bordered medium"
          onClick={() => onCancelClick()}
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
