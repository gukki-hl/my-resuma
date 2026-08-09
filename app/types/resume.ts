
export interface ResumeData {
    id: string;
    title: string;
    createdAt: string;//创建时间
    updatedAt: string;//更新时间
    templateId: string | null | undefined;//模板id
    basic: BasicInfo;//基本信息
    education: Education[];//教育经历
    experience: Experience[];//工作经历
    projects: Project[];//项目经历
    certificates: Certificate[];//证书作品
    customData: Record<string, CustomItem[]>;//自定义
    skillContent: string;//专业技能
    selfEvaluationContent: string;//自我评价
    activeSection: string;//当前选中标题
    draggingProjectId: string | null;//正在拖拽的项目id
    menuSections: MenuSection[];//模块显示/隐藏/排序配置
    globalSettings: GlobalSettings;//全局样式设置
}

//基本信息
export interface BasicInfo {
    birthDate: string;//生日
    name: string;//姓名
    title: string;//
    email: string;//邮箱
    phone: string;//手机号
    location: string;//地址
    icons: Record<string, string>;//图标
    employementStatus: string;//状态
    photo: string;//头像
    photoConfig: PhotoConfig;//头像设置
    fieldOrder?: BasicFieldType[];
    customFields: CustomFieldType[];//自定义字段
    githubKey: string;//github值
    githubUseName: string;//github名字
    githubContributionsVisible: boolean;//可见？
    layout?: "left" | "center" | "right";//基本信息布局
}
export interface Education {
    id: string;
    school: string;
    major: string;
    degree: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
    visible?: boolean;
}
export interface Experience {
    id: string;
    company: string;
    position: string;
    date: string;
    details: string;
    visible?: boolean;
}
export interface PhotoConfig {
    width: number;//宽
    height: number;//高
    aspectRatio: "1:1" | "4:3" | "3:4" | "16:9" | "custom";//宽高比
    borderRadius: "none" | "medium" | "full" | "custom";//圆角
    customBorderRadius: number;//自定义圆角
    visible?: boolean;//可见
}
export interface BasicFieldType {
    id: string;
    key: keyof BasicInfo;
    label: string;
    type?: "date" | "textarea" | "text" | "editor";
    visible: boolean;
    custom?: boolean;
}
export interface CustomFieldType {
    id: string;//id
    label: string;//自定义标签
    value: string;//值
    icon?: string;//图标
    visible?: boolean;//可见？
    custom?: boolean;//自定义
    displayLabel?: boolean;//显示标签？
}


export interface Project {
    id: string;
    name: string;
    role: string;
    date: string;
    description: string;
    visible: boolean;
    link?: string;
    linkLabel?: string;
}

export interface Certificate {
    id: string;
    url: string; // Base64 encoding for the image or direct URL
    width: number; // Width percentage to support flex layouts
}

export interface CustomItem {
    id: string;
    title: string;
    subtitle: string;
    dateRange: string;
    description: string;
    visible: boolean;
}
export interface MenuSection {
    id: string;
    title: string;
    icon: string;
    enabled: boolean;
    order: number;
}


export type GlobalSettings = {
  themeColor?: string        // 主题色，影响标题、边框、强调色
  fontFamily?: string        // 字体
  baseFontSize?: number      // 基础字体大小
  pagePadding?: number       // 页面左右内边距
  paragraphSpacing?: number  // 段落间距（条目之间）
  lineHeight?: number        // 行高
  sectionSpacing?: number    // 模块间距（section 之间）
  headerSize?: number        // 模块标题字体大小
  subheaderSize?: number     // 子标题字体大小（公司名、学校名）
  useIconMode?: boolean      // 联系方式是否用图标显示
  centerSubtitle?: boolean   // 副标题是否居中
  flexibleHeaderLayout?: boolean  // 头部是否弹性布局
  autoOnePage?: boolean      // 是否自动压缩到一页
}