import React from 'react'
import { Education, GlobalSettings } from '@/app/types/resume'

interface EducationSectionProps {
  education: Education[]
  globalSettings: GlobalSettings
}

const EducationSection = ({ education, globalSettings }: EducationSectionProps) => {
  return (
    <div>EducationSection</div>
  )
}

export default EducationSection
