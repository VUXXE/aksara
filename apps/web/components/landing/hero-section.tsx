"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center pt-24 pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />

            <div className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 mb-8 backdrop-blur-sm"
                >
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>The All-in-One AI Growth Platform</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    <span className="text-white">Build. Market.</span>
                    <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent ml-0 md:ml-4">
                        Scale.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Your all-in-one agency operating system. Build stunning websites, manage client relationships, and automate your growth with AI-powered tools.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-20"
                >
                    <Link
                        href="/agency/sign-up"
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "rounded-full px-8 py-6 text-base font-semibold bg-white text-black hover:bg-zinc-200"
                        )}
                    >
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                        href="/agency/sign-in"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "rounded-full px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10 bg-transparent"
                        )}
                    >
                        View Demo
                    </Link>
                </motion.div>

                {/* Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative w-full max-w-6xl mx-auto"
                >
                    {/* Glow behind image */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20" />

                    <div className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden shadow-2xl">
                        {/* Mockup Header */}
                        <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>

                        {/* Placeholder for Dashboard Image - User can replace with actual screenshot */}
                        <div className="aspect-[16/9] w-full bg-zinc-900/50 flex items-center justify-center relative overflow-hidden group">
                            {/* We will try to use the preview.png if it exists, otherwise a nice placeholder */}
                            <Image
                                src="/assets/preview.png"
                                alt="Dashboard Preview"
                                width={1200}
                                height={675}
                                className="object-cover w-full h-full opacity-90 transition-opacity group-hover:opacity-100"
                                onError={(e) => {
                                    // Fallback if image doesn't exist (handled by Next.js usually, but visual fallback here)
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-primary/20 rounded-full blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
