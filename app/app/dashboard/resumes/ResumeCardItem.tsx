"use client";
import { Card, CardContent, CardFooter } from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { ResumeData } from "@/app/types/resume";
import { cn } from "@/lib/utils";
import { Edit2, Copy, Trash2 } from "lucide-react";

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
        <CardFooter className="p-0 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 overflow-hidden">
          <div className="flex w-full h-11  divide-x  divide-gray-100 dark:divide-gray-800">
            <button className="flex-1 flex items-center justify-center gap-1.5 hover:bg-white  dark:hover:bg-gray-800/80 transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-primary font-medium text-sm group">
              <Edit2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform opacity-70 group-hover:opacity-100" />
              <span>编辑</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 hover:bg-white dark:hover:bg-gray-800/80 transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm group">
              <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform opacity-70 group-hover:opacity-100" />
              <span>复制</span>
            </button>

            <button className="flex-1 flex items-center justify-center gap-1.5 hover:bg-red-50 dark:hover:bg-red-950/40 transition-all duration-200 text-red-600 dark:text-red-400 font-medium text-sm group">
              <Trash2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100" />
              <span>删除</span>
            </button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
