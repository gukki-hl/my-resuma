import React from 'react'
import { GlobalSettings } from '@/app/types/resume'

interface SkillSectionProps {
  skill: string
  globalSettings: GlobalSettings
}

const SkillSection = ({ skill, globalSettings }: SkillSectionProps) => {
  return (
    <div>SkillSection</div>
  )
}

export default SkillSection
