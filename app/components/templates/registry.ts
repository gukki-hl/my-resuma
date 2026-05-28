import { ResumeTemplate } from '@/app/types/template'
import { ResumeData } from '@/app/types/resume'
import React from 'react'
import { classicConfig } from './classic/config'
import ClassicTemplate from './classic'

interface TemplateRegistryEntry {
    config: ResumeTemplate
    Component: React.FC<{ data: ResumeData; template: ResumeTemplate }>
}

export const TEMPLATE_REGISTRY: TemplateRegistryEntry[] = [
    { config: classicConfig, Component: ClassicTemplate }
]

export function getTemplateComponent(layout: string): React.FC<{ data: ResumeData; template: ResumeTemplate }> {
    return (
        TEMPLATE_REGISTRY.find((entry) => entry.config.layout === layout)
            ?.Component ?? ClassicTemplate
    )
}
