import React from 'react'
import { Project, GlobalSettings } from '@/app/types/resume'

interface ProjectSectionProps {
  projects: Project[]
  globalSettings: GlobalSettings
}

const ProjectSection = ({ projects, globalSettings }: ProjectSectionProps) => {
  return (
    <div>ProjectSection</div>
  )
}

export default ProjectSection
