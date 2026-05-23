import { ScrollArea } from "@/app/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ChevronLeft, FilePlus, X } from "lucide-react";
interface CreateResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (trmplateId: string | null) => void;
}
export const CreateResumeModal = ({
  open,
  onCreate,
  onOpenChange,
}: CreateResumeModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogContent className="fixed left-1/2 top-1/2 z-50 max-w-[1100px] w-[95vw] h-[90vh] sm:h-[85vh] p-0 overflow-hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl rounded-[2rem] flex flex-col -translate-x-1/2 -translate-y-1/2">
          <DialogTitle className="sr-only">常见弹窗标题</DialogTitle>

          <div className="relative w-full h-full min-h-0 flex flex-col">
            {/* HEADER BAR */}
            <div className="flex items-center justify-between px-8 pt-6 pb-2 shrink-0">
              <div className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
                新建简历
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="common.cancel"
                className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <div className="flex-1 min-h-0 relative w-full">
              <ScrollArea className="h-full w-full">
                <div className="px-8 pb-12 max-w-7xl mx-auto space-y-12">
                  {/* SECTION 1: BLANK TEMPLATE */}
                  <section>
                    <div className="flex items-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        从空白开始
                      </h4>
                      <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-6" />
                    </div>
                    <motion.div
                      layoutId={`card-container-blank`}
                      whileHover={{ y: -4, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="group cursor-pointer rounded-2xl border border-gray-200/60 dark:border-gray-800/60 shadow-sm bg-gray-50/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 p-6 flex flex-col sm:flex-row items-center gap-6"
                    >
                      {/* Small visual icon area */}
                      <motion.div
                        layoutId={`card-image-blank`}
                        className="h-28 w-28 sm:h-32 sm:w-32 shrink-0 rounded-2xl bg-white dark:bg-gray-800 shadow-inner flex items-center justify-center border border-gray-100 dark:border-gray-700"
                      >
                        <FilePlus className="w-10 h-10 text-gray-400 group-hover:text-primary transition-colors" />
                      </motion.div>

                      <div className="flex-1 text-center sm:text-left">
                        <motion.div
                          layoutId={`card-title-blank`}
                          className="inline-block"
                        >
                          <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                            空白简历
                          </h5>
                        </motion.div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-lg leading-relaxed">
                          从内置默认模板创建,空白开始
                        </p>
                      </div>

                      <div className="hidden sm:flex text-primary font-medium items-center text-sm group-hover:translate-x-0 duration-300">
                        立即创建
                        <ChevronLeft className="w-4 h-4 ml-1 rotate-180" />
                      </div>
                    </motion.div>
                  </section>

                  {/* SECTION 2: NORMAL TEMPLATES */}
                </div>
              </ScrollArea>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
