import { create } from "zustand"
import { persist } from "zustand/middleware";
import { ResumeData } from "../types/resume";
import { generateUUID } from "../utils/uuid";


interface ResumeStore {
    resumes: Record<string, ResumeData>;
    activeResumeId: string | null;
    hasHydrated: boolean;
    createResume: () => string;
}

export const useResumeStore = create(
    persist<ResumeStore>(
        (set) => ({
            resumes: {},
            activeResumeId: null,
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