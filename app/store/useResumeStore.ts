import { create } from "zustand"
import { persist } from "zustand/middleware";
import { ResumeData } from "../types/resume";
import { generateUUID } from "../utils/uuid";


interface ResumeStore {
    resumes: Record<string, ResumeData>;
    activeResumeId: string | null;
    activeResume: ResumeData | null;
    hasHydrated: boolean;
    createResume: (templateId: string | null, isBlank?: boolean) => string;
    deleteResume: (resume: ResumeData) => void;
}

export const useResumeStore = create(
    persist<ResumeStore>(
        (set) => ({
            resumes: {},
            activeResumeId: null,
            activeResume: null,
            hasHydrated: false,

            createResume: () => {
                const id = generateUUID();
                const now = new Date().toISOString();
                const newResume: ResumeData = {
                    id,
                    title: `新建简历 ${id.slice(0, 6)}`,
                    createdAt: now,
                    updatedAt: now,
                    templateId: null,
                    basic: {
                        birthDate: "",
                        name: "",
                        title: "",
                        email: "",
                        phone: "",
                        location: "",
                        icons: {},
                        employementStatus: "",
                        photo: "",
                        photoConfig: {
                            width: 80,
                            height: 80,
                            aspectRatio: "1:1",
                            borderRadius: "full",
                            customBorderRadius: 0,
                        },
                        customFields: [],
                        githubKey: "",
                        githubUseName: "",
                        githubContributionsVisible: false,
                    },
                    education: [],
                    experience: [],
                    projects: [],
                    certificates: [],
                    customData: {},
                    skillContent: "",
                    selfEvaluationContent: "",
                    activeSection: "",
                    draggingProjectId: null,
                    menuSections: [],
                    globalSettings: {},
                };
                set((state) => ({
                    resumes: { ...state.resumes, [id]: newResume },
                    activeResumeId: id,
                }))
                return id
            },

            deleteResume: (resume) => {
                const resumeId = resume.id
                set((state) => {
                    const { [resumeId]: _, activeResume, ...rest } = state.resumes;
                    return {
                        resumes: rest,
                        activeResumeId: null,
                        activeResume: null
                    }
                })
            }

        }),
        {
            name: "resume-storage",
            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.hasHydrated = true;
                }
            },
        }
    )
)