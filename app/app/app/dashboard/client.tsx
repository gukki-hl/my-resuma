"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { Home, Settings, FileText } from "lucide-react";
import Link from "next/link";
interface ClientProps {
  children: ReactNode;
}

function Client({ children }: ClientProps) {
  const sidebarItems = [
    { name: "我的简历", icon: Home, href: "/app/app/dashboard/resumes" },
    { name: "简历模板", icon: FileText, href: "/app/app/dashboard/templates" },
    { name: "AI服务商", icon: Settings, href: "/app/app/dashboard/ai" },
    { name: "通用设置", icon: Settings, href: "/app/app/dashboard/settings" },
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
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
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

export default Client;
