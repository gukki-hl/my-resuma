import { ResumeTemplate } from '@/app/types/template'
import { ResumeData } from '@/app/types/resume'
import React from 'react'
import { classicConfig } from './classic/config'
import ClassicTemplate from './classic'

// 模板注册条目：将模板配置与对应的渲染组件关联
interface TemplateRegistryEntry {
    config: ResumeTemplate
    Component: React.FC<{ data: ResumeData; template: ResumeTemplate }>
}

// 模板注册表，所有可用模板需在此注册
export const TEMPLATE_REGISTRY: TemplateRegistryEntry[] = [
    { config: classicConfig, Component: ClassicTemplate }
]

// 从注册表中提取的默认模板列表，供模板选择器等场景使用
export const DEFAULT_TEMPLATES: ResumeTemplate[] = TEMPLATE_REGISTRY.map((entry) => entry.config)

// 根据布局标识查找对应模板组件，未匹配时回退到 ClassicTemplate
export function getTemplateComponent(layout: string): React.FC<{ data: ResumeData; template: ResumeTemplate }> {
    return (
        TEMPLATE_REGISTRY.find((entry) => entry.config.layout === layout)
            ?.Component ?? ClassicTemplate
    )
}
