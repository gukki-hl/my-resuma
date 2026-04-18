"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="w-9 h-9 relative cursor-pointer rounded-xl hover:bg-accent/80 flex items-center justify-center transition-colors"
        >
          <Sun className="h-[1.1rem] w-[1.1rem] absolute inset-0 m-auto rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="h-[1.1rem] w-[1.1rem] absolute inset-0 m-auto rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item onSelect={() => setTheme("light")}>
            Light
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => setTheme("dark")}>
            Dark
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => setTheme("system")}>
            System
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ThemeToggle;
