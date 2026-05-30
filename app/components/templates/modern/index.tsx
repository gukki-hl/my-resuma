import { ResumeData } from "@/app/types/resume";
import { ResumeTemplate } from "@/app/types/template";
import React from "react";
import BaseInfo from "./sections/BaseInfo";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";

interface ModernTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data, template }) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "basic":
        return (
          <BaseInfo
            basic={data.basic}
            globalSettings={data.globalSettings}
            template={template}
          />
        );
      case "experience":
        return (
          <ExperienceSection
            experiences={data.experience}
            globalSettings={data.globalSettings}
          />
        );
      case "education":
        return (
          <EducationSection
            education={data.education}
            globalSettings={data.globalSettings}
          />
        );
      case "skills":
        return (
          <SkillSection
            skill={data.skillContent}
            globalSettings={data.globalSettings}
          />
        );
      case "projects":
        return (
          <ProjectSection
            projects={data.projects}
            globalSettings={data.globalSettings}
          />
        );
    }
  };

  const basicSection = enabledSections.find((s) => s.id === "basic");
  const educationSection = enabledSections.find((s) => s.id === "education");
  const otherSections = enabledSections.filter(
    (s) => s.id !== "basic" && s.id !== "education",
  );

  return (
    <table
      className="w-full border-collapse"
      style={{
        height: `calc(297mm - ${(data.globalSettings?.pagePadding || 32) * 2}px)`,
        tableLayout: "fixed",
      }}
    >
      <tbody>
        <tr>
          <td
            className="p-4 align-top relative"
            style={{
              width: "33.333333%",
              backgroundColor: data.globalSettings.themeColor,
              color: "#ffffff",
              paddingTop: data.globalSettings.sectionSpacing,
            }}
          >
            {basicSection && renderSection(basicSection.id)}
            {educationSection && (
              <div className="mt-6">
                <EducationSection
                  education={data.education}
                  globalSettings={data.globalSettings}
                />
              </div>
            )}
          </td>
          <td
            className="p-4 pt-0 align-top relative"
            style={{
              width: "66.666667%",
              backgroundColor: colorScheme.background,
              color: colorScheme.text,
            }}
          >
            {otherSections.map((section) => (
              <div key={section.id}>{renderSection(section.id)}</div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ModernTemplate;
