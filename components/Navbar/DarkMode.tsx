"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function DarkMode() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center">
      {/* Bold, animated Light/Dark text */}
      <motion.span
        key={isDark ? "dark" : "light"}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.3 }}
        className="mr-2 font-bold"
      >
        {isDark ? "Dark" : "Light"}
      </motion.span>

      {/* Toggle Button */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative flex h-7 w-14 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-300"
      >
        <motion.div
          className="absolute left-1 flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-black shadow-md"
          animate={{ x: isDark ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="h-4 w-4 text-blue-500" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="h-4 w-4 text-yellow-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>
    </div>
  );
}
