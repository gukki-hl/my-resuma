"use client";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { ResumeData } from "@/app/types/resume";
import { cn } from "@/lib/utils";

interface ResumeCardItemProps {
  id: string;
  resume: ResumeData;
  index: number;
}

export const ResumeCardItem = ({ id, resume, index }: ResumeCardItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className={cn(
          "group border transition-all duration-200 aspect-210/297 flex flex-col overflow-hidden",
          "hover:border-primary/40 hover:shadow-lg",
          "dark:hover:border-primary/40",
        )}
      >
        <CardContent className="p-0 flex-1 relative bg-gray-50 dark:bg-gray-900 overflow-hidden cursor-pointer">
          <div className="absolute inset-0 pb-6 flex items-center justify-center pointer-events-none transition-transform duration-300 group-hover:scale-[1.02] overflow-hidden">
            <div className="w-full h-full relative origin-top bg-white">
              <div
                className="resume-preview absolute top-0 left-0 bg-white"
                style={{
                  width: "210mm",
                  height: "297mm",
                  transform: `scale(0.24)`,
                  transformOrigin: "top left",
                  padding: `32px`,
                }}
              ></div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 top-[60%] pointer-events-none bg-gradient-to-t from-white via-white/90 to-transparent dark:from-gray-950 dark:via-gray-950/90 z-0"></div>
          <div className="absolute inset-x-0 bottom-0 pt-12 pb-3 px-4 flex justify-between items-end border-t border-transparent z-10 transition-colors group-hover:bg-white/50 dark:group-hover:bg-gray-950/50">
            <div className="flex flex-col w-full">
              <span className="text-[15px] font-semibold truncate text-gray-900 dark:text-gray-100 drop-shadow-sm w-[90%]">
                {resume.title}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {new Date(resume.createAt).toLocaleDateString("zh-CN")}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
