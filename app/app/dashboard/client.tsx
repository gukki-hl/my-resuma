"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { Home, Settings, FileText ,LucideIcon} from "lucide-react";
import Link from "next/link";

interface MenuItem {
  title: string;
  url?: string;
  href?: string;
  icon: LucideIcon;
  items?: { item: string; href: string }[];
}

function DashboardLayout({ children }: { children: ReactNode }) {
  const sidebarItems: MenuItem[] = [
    { title: "我的简历", icon: Home, url: "/app/dashboard/resumes" },
    { title: "简历模板", icon: FileText, url: "/app/dashboard/templates" },
    { title: "AI服务商", icon: Settings, url: "/app/dashboard/ai" },
    { title: "通用设置", icon: Settings, url: "/app/dashboard/settings" },
  ];

  return (
    <div className="flex h-screen bg-background ">
      {/* Sidebar */}
      <div className=" w-64 border-r border-border/40 bg-card/50 backdrop-blur-xl bg-blue-300">
        {/* 头部 */}
        <div className="h-16 flex items-center justify-center border-b border-border/40">
          <div className="w-full cursor-pointer justify-center flex items-center">
            <Image
              src="/logo.svg"
              width={48}
              height={48}
              className="hover:opacity-80 transition-opacity"
              alt="Magic Resume Logo"
            />
            <span className="font-bold text-lg tracking-tight">魔方简历</span>
          </div>
        </div>
        {/* 导航菜单 */}
        <div className="px-3 py-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.url ?? '#'} 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <item.icon size={20} />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}

export default DashboardLayout;
