import React from 'react'
import { Experience, GlobalSettings } from '@/app/types/resume'

interface ExperienceSectionProps {
  experiences: Experience[]
  globalSettings: GlobalSettings
}

const ExperienceSection = ({ experiences, globalSettings }: ExperienceSectionProps) => {
  return (
    <div>ExperienceSection</div>
  )
}

export default ExperienceSection
