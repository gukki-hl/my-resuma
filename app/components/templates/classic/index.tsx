import { ResumeData } from '@/app/types/resume'
import { ResumeTemplate } from '@/app/types/template'
import BaseInfo from './sections/BaseInfo'
import ExperienceSection from './sections/ExperienceSection'
import EducationSection from './sections/EducationSection'
import SkillSection from './sections/SkillSection'
import ProjectSection from './sections/ProjectSection'

interface ClassicTemplateProps {
    data: ResumeData
    template: ResumeTemplate
}

const ClassicTemplate = ({ data, template }: ClassicTemplateProps) => {
    const enabledSections = data.menuSections
        .filter((s) => s.enabled)
        .sort((a, b) => a.order - a.order)

    const renderSection = (sectionId: string) => {
        switch (sectionId) {
            case "basic":
                return <BaseInfo basic={data.basic} globalSettings={data.globalSettings} template={template} />
            case "experience":
                return <ExperienceSection experiences={data.experience} globalSettings={data.globalSettings} />
            case "education":
                return <EducationSection education={data.education} globalSettings={data.globalSettings} />
            case "skills":
                return <SkillSection skill={data.skillContent} globalSettings={data.globalSettings} />
            case "projects":
                return <ProjectSection projects={data.projects} globalSettings={data.globalSettings} />
        }
    }

    return (
        <div>
            {enabledSections.map((section) => (
                <div key={section.id}>
                    {renderSection(section.id)}
                </div>
            ))}
        </div>
    )
}

export default ClassicTemplate
