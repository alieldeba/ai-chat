"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 transition-all" />
        </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:-rotate-90" />
        </Button>
      )}
    </>
  );
}
