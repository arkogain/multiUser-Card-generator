"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MoonStar, SunDim } from "lucide-react";

const ModeBtn = () => {
  const { theme, setTheme } = useTheme();

  const btnToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
      <Button className="bg-cyan-400" size="icon" onClick={btnToggle}>
        <SunDim className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

        <MoonStar className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </>
  );
};

export default ModeBtn;
