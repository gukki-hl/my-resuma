"use client";
import React from "react";
import { motion } from "framer-motion";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@radix-ui/themes/components/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  buttonText: string;
  extraItems?: Array<{
    icon: React.ReactNode;
    label: string;
    component: React.ReactNode;
  }>;
}

const MobileMenu = ({
  isOpen,
  onClose,
  buttonText,
  extraItems,
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-x-0 top-16 z-50 md:hidden"
    >
      <div className="bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60 border-t border-b dark:border-gray-800">
        <nav className="mx-auto max-w-[1200px] px-4 py-6 flex flex-col gap-6">
          <div className="flex items-center justify-center gap-8">
            <LanguageSwitch />
            <ThemeToggle />
            <span className="relative z-10 text-sm font-medium">
              Star on GitHub
            </span>
          </div>

          {extraItems && extraItems.length > 0 && (
            <div className="flex flex-col items-center justify-center gap-2">
              {extraItems.map((item, index) => (
                <div key={index}>{item.component}</div>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-3 px-4">
            <Button
              type="button"
              className="bg-primary hover:opacity-90 text-white w-full py-6 border"
            >
              {buttonText}
            </Button>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
