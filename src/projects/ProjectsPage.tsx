import React from 'react'
import { MOCK_PROJECTS } from './MockProjects'
import ProjectList from './ProjectList'

function ProjectsPage() {
  return (
    <div>
      <h1>
          Projects
      </h1>
      <ProjectList projects = {MOCK_PROJECTS} />
    </div>
  )
}

export default ProjectsPage
