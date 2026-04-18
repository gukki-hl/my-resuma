import Image from "next/image";
import ThemeToggle from "@/app/components/ThemeToggle";
import LanguageSwitch from "@/app/components/LanguageSwitch";

export default function Home() {
  return (
    <header className="w-full ">
      <div className="relative bg-linear-to-b from-[#f8f9fb] to-white dark:from-gray-900 dark:to-gray-800">
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
              <button
                type="button"
                className="rounded-xl px-6 h-10 font-medium transition-all hover:opacity-90 active:scale-95"
              >
                开始使用
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
