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
                    {/* Tetrax */}
                    <div>
                        <h2 className="text-xl font-semibold">Marwan Ahmed "Tetrax"</h2>
                        <p className="text-gray-600 dark:text-gray-300">AI Software Engineer</p>
                        <div className="flex gap-4 mt-2">
                            <a href="https://github.com/marawan206" className="text-blue-500 hover:underline">GitHub</a>
                            <a href="https://www.linkedin.com/in/marwan-ahmed206/" className="text-blue-500 hover:underline">LinkedIn</a>
                        </div>
                    </div>

                    {/* Yujyro */}
                    <div>
                        <h2 className="text-xl font-semibold">Omar Ayman "Yujyro"</h2>
                        <p className="text-gray-600 dark:text-gray-300">Fullstack Engineer</p>
                        <div className="flex gap-4 mt-2">
                            <a href="https://github.com/OmarAyman12" className="text-blue-500 hover:underline">GitHub</a>
                            <a href="https://www.linkedin.com/in/omar-ayman-7abb37241/" className="text-blue-500 hover:underline">LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Contact Button */}
                <div className="mt-8">
                    <Button className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition">
                        Contact Us
                    </Button>
                </div>

                
                
            </div>
        </section>
    );
}
