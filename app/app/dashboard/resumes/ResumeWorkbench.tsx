"use client";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { Settings, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const ResumeWorkbench = () => {
  const router = useRouter();

  return (
    <div className="h-[calc(100vh-2rem)] w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 space-y-7 py-8"
      >
        <motion.div
          className="flex w-full items-center justify-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
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

        <motion.div
          className="px-4 sm:px-6 flex items-center justify-between"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            我的简历
          </h1>
          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="default"
                className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
              >
                <Plus className="mr-2 h-4 w-4" />
                新建简历
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full p-3 sm:p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card
                className={cn(
                  "relative border border-dashed cursor-pointer transition-all duration-200 aspect-[210/297] flex flex-col",
                  "hover:border-gray-400 hover:bg-gray-50",
                  "dark:hover:border-primary dark:hover:bg-primary/10",
                )}
              >
                <CardContent className="flex-1 p-0 text-center flex flex-col items-center justify-center">
                  <motion.div
                    className="mb-4 p-4 rounded-full bg-gray-100 dark:bg-primary/10"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="h-8 w-8 text-gray-600 dark:text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl text-gray-900 dark:text-gray-100 px-4">
                    新建简历
                  </CardTitle>
                  <CardDescription className="mt-2 text-gray-600 dark:text-gray-400 px-4">
                    创建一个新简历开始
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
