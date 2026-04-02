"use client";

import { useEffect, useState } from "react";

function applyTheme(isDark: boolean) {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add("dark");
    root.classList.remove("light");
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
  }
}

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDark(true);
      applyTheme(true);
    } else if (stored === "light") {
      setDark(false);
      applyTheme(false);
    } else {
      setDark(true);
      applyTheme(true);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    applyTheme(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (dark === null) return null;

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-6 right-6 text-xs opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
