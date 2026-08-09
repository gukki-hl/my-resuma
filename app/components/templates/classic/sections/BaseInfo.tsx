import { BasicInfo as BasicInfoType, GlobalSettings } from '@/app/types/resume'
import { ResumeTemplate } from '@/app/types/template'

interface BaseInfoProps {
  basic: BasicInfoType
  globalSettings: GlobalSettings
  template: ResumeTemplate
}

const BaseInfo = ({ basic, globalSettings, template }: BaseInfoProps) => {
  return (
    <div>BaseInfo</div>
  )
}

export default BaseInfo
