"use client";
import { Button } from "@/app/components/ui/Button";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export const ResumeWorkbench = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 space-y-7 py-8"
    >
      <div className="mb-6 bg-green-50/50 dark:bg-green-950/30 border-green-200 dark:border-green-900 border-1">
        <div className="flex items-center justify-between">
          <span className="text-green-700 dark:text-green-400">
            建议在设置中配置简历备份文件夹，防止你的数据可能会在浏览器缓存清除后丢失
          </span>
          <Button
            size="sm"
            variant="outline"
            className="ml-4 hover:bg-green-100 dark:hover:bg-green-900"
            onClick={() => {
              router.push("/app/dashboard/settings");
            }}
          >
            <Settings className="w-4 h-4 mr-2" />
            前往设置
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
