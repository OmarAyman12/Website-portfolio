import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

export default function HeroSection() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <section className="w-full flex flex-col items-center">
            {/* Banner Section */}
            <div className="relative w-full max-w-5xl">
                <Image 
                    src="/images/image.svg" 
                    alt="Tujyro Banner" 
                    width={1200} 
                    height={600} 
                    priority
                    className="w-full rounded-lg object-cover"
                />
                <motion.h1
                    className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                    TUJYRO
                </motion.h1>
            </div>

            {/* Info Section */}
            <div className="container mx-auto px-6 py-12 flex flex-col items-center text-center">
                <div className="flex flex-col md:flex-row md:justify-center gap-8">
                </div>

                {/* Contact Button */}
                <div className="mt-8">
                    <Button className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition">
                        Contact Us
                    </Button>
                </div>

                {/* Dark Mode Toggle */}
                <div className="mt-6">
                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>
            </div>
        </section>
    );
}
