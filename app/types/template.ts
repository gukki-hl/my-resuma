// 定义模板配置类型

import { CSSProperties } from "react";

export interface ResumeTemplate {
    id: string;//模板标识 如"left-right"、"classic"
    name: string;//模板名称
    description: string;//模板简历文案
    thumbnail: string;//模板缩略图路径
    layout: string;//布局类型
    colorScheme: {//配色方案(主色，铺色，背景，文字)
        primary: string;
        secondary: string;
        background: string;
        text: string;
    };
    spacing: {//间距
        sectionGap: number;
        itemGap: number;
        contentPadding: number;
    };
    basic: {//基础信息区布局
        layout?: "left" | "center" | "right";
    };
    availableSections?: string[];//可用的简历模板
}

//控制模板标题的样式
export interface TemplateConfig {
    sectionTitle: {
        className?: string;//额外的css类名
        styles: CSSProperties;//内联样式对象
    };
}