import React from "react";
import { TemplateProvider } from "./TemplateContext";
import { ResumeData } from "@/app/types/resume";
import { ResumeTemplate } from "@/app/types/template";
import { getTemplateComponent } from "./registry";

interface TemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const ResumeTemplateComponent: React.FC<TemplateProps> = ({
  data,
  template,
}) => {
  const TemplateComponent = getTemplateComponent(template.layout);

  return (
    <TemplateProvider templateId={template.id} menuSections={data.menuSections}>
      {/* eslint-disable-next-line react-hooks/static-components -- 模板切换时有意重新挂载组件 */}
      <TemplateComponent data={data} template={template} />
    </TemplateProvider>
  );
};

export default ResumeTemplateComponent;
