import { create } from "zustand"
import { persist } from "zustand/middleware";
import { ResumeData } from "../types/resume";
import { generateUUID } from "../utils/uuid";


interface ResumeStore {
    resumes: Record<string, ResumeData>;
    activeResumeId: string | null;
    activeResume: ResumeData | null;
    hasHydrated: boolean;
    createResume: () => string;
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
                const newResume = {
                    id,
                    title: `新建简历 ${id.slice(0, 6)}`,
                    createAt: new Date().toISOString(),
                    updateAt: new Date().toISOString(),
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