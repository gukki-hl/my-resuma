import { getTemplateSnapshotSrc, isTemplatePreviewLocale } from '@/lib/templatePreview'
import { useMemo } from 'react'
import { DEFAULT_TEMPLATES } from '../components/templates/registry'
import { TEMPLATE_SNAPSHOT_MANIFEST } from '../app/generated/templateSnapshotManifest'

export const useTemplateSnapshots = (locale?: string | null | undefined) => {
    const resolvedLocale = isTemplatePreviewLocale(locale) ? locale : 'zh'

    const snapshotMap = useMemo(
        () => Object.fromEntries(
            DEFAULT_TEMPLATES.map((template) => [
                template.id,
                getTemplateSnapshotSrc(TEMPLATE_SNAPSHOT_MANIFEST, resolvedLocale, template.id)
            ])

        ) as Record<string, string | null>, //模板快照映射

        [resolvedLocale]
    )

    return {
        resolvedLocale,
        snapshotMap
    }
}
