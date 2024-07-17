"use client";

import * as React from "react";
import { GearIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    let nextTheme = theme;
    switch (theme) {
      case "light":
        nextTheme = "dark";
        break;
      case "dark":
        nextTheme = "light";
        break;
      default:
        nextTheme = "light";
        break;
    }

    setTheme(nextTheme);
  }, [theme, setTheme]);

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="bg-slate-200 text-slate-900">
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
