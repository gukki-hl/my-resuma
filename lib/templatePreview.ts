export const TEMPLATE_PREVIEW_LOCALES = ["zh", "en"] as const; //语言列表


export type TemplatePreviewLocale = (typeof TEMPLATE_PREVIEW_LOCALES)[number]; //语言类型


export interface TemplateSnapshotManifest {
    version: number;
    generatedAt: string | null;
    locales: Record<TemplatePreviewLocale, Record<string, string>>
}

export const isTemplatePreviewLocale = (value: string | null | undefined): value is TemplatePreviewLocale => value === 'zh' || value === 'en'

export const getTemplateSnapshotSrc = (
    manifest: TemplateSnapshotManifest,
    locale: TemplatePreviewLocale,
    templateId: string,
) => manifest.locales[locale][templateId] ?? null
