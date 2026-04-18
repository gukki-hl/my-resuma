import Image from "next/image";
import ThemeToggle from "@/app/components/ThemeToggle";
import LanguageSwitch from "@/app/components/LanguageSwitch";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <div className="flex items-center justify-between h-20">
        {/* logo */}
        <div className="flex items-center cursor-pointer group">
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
        </div>
      </div>
    </div>
  );
}
