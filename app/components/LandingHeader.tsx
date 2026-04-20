"use client";

import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "@/app/components/ThemeToggle";
import LanguageSwitch from "@/app/components/LanguageSwitch";
import { Menu, X } from "lucide-react";
import MobileMenu from "./home/client/MobileMenu";
import { Button } from "./ui/Button";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-200 ">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex h-20 items-center justify-between">
            {/* logo */}
            <div className="flex cursor-pointer items-center group">
              <Image
                src="/logo.svg"
                width={60}
                height={60}
                alt="Magic Resume Logo"
              />
              <span className="font-serif text-[24px] tracking-tight font-semibold text-foreground/90">
                魔方简历
              </span>
            </div>
            {/* 右边栏 */}
            <div className="hidden md:flex items-center gap-4">
              {/* 字体切换 */}
              <LanguageSwitch />
              {/* 主题切换 */}
              <ThemeToggle />
              <span className="relative z-10 text-sm font-medium">
                Star on GitHub
              </span>
              <Button className="rounded-xl px-6 h-10 font-medium transition-all hover:opacity-90 active:scale-95">
                开始使用
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden p-2.5 hover:bg-accent rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        buttonText={"开始使用"}
        extraItems={[
          {
            icon: null,
            label: "示例",
            component: (
              <a
                href="https://example.com"
                className="text-sm text-muted-foreground underline"
                onClick={() => setIsMenuOpen(false)}
              >
                假设的额外链接
              </a>
            ),
          },
        ]}
      />
    </>
  );
}
