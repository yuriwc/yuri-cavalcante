"use client";

import { HalfMoon, SunLight } from "iconoir-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "light") {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }} // Animação ao passar o mouse
        transition={{ type: "spring", stiffness: 300 }} // Transição suave
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <SunLight className="pointer" onClick={() => setTheme("dark")} />
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Animação ao passar o mouse
      transition={{ type: "spring", stiffness: 300 }} // Transição suave
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <HalfMoon className="pointer" onClick={() => setTheme("light")} />
    </motion.div>
  );
}
