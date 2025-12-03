"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, BarChart3, Globe } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 antialiased">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white mb-8 backdrop-blur-sm"
                >
                    <Sparkles className="size-4 text-purple-400" />
                    <span>The All-in-One AI Growth Platform</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl"
                >
                    Build. Market. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Scale.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 drop-shadow-md"
                >
                    Aksara unifies CRM, Marketing, Website Building, Sales, and Support into a single, AI-powered ecosystem. Stop juggling tools and start growing.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="h-12 px-8 rounded-full text-base bg-white text-black hover:bg-zinc-200">
                        Start Free Trial <ArrowRight className="ml-2 size-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base border-white/20 text-white hover:bg-white/10 bg-black/50 backdrop-blur-md">
                        View Demo
                    </Button>
                </motion.div>

                {/* Floating Icons / 3D Elements Mockup */}
                <div className="mt-20 relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute inset-0 bg-black/60 rounded-t-3xl border-t border-l border-r border-white/10 backdrop-blur-md p-6"
                    >
                        <div className="grid grid-cols-3 gap-6 h-full">
                            {/* Mock Dashboard Cards */}
                            <div className="col-span-2 space-y-6">
                                <div className="h-1/2 rounded-xl bg-zinc-900/80 border border-white/10 p-6 flex flex-col justify-between">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400"><BarChart3 size={20} /></div>
                                            <span className="font-medium text-white">Revenue Growth</span>
                                        </div>
                                        <span className="text-green-400 text-sm font-medium">+12.5%</span>
                                    </div>
                                    <div className="h-24 flex items-end gap-2">
                                        {[40, 60, 45, 70, 55, 80, 65, 85].map((h, i) => (
                                            <div key={i} className="flex-1 bg-blue-500/50 rounded-t-sm hover:bg-blue-500/70 transition-colors" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>
                                <div className="h-1/3 rounded-xl bg-zinc-900/80 border border-white/10 p-6 flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-purple-500/20 text-purple-400"><Zap size={24} /></div>
                                    <div>
                                        <div className="text-sm text-zinc-400">AI Workflow</div>
                                        <div className="font-medium text-white">Lead Scoring Automation Active</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 space-y-6">
                                <div className="h-full rounded-xl bg-zinc-900/80 border border-white/10 p-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-20"><Globe size={100} /></div>
                                    <div className="relative z-10">
                                        <div className="text-sm text-zinc-400 mb-2">Website Builder</div>
                                        <div className="font-medium text-xl mb-4 text-white">Live Preview</div>
                                        <div className="space-y-3">
                                            <div className="h-2 w-3/4 bg-zinc-700 rounded-full" />
                                            <div className="h-2 w-1/2 bg-zinc-700 rounded-full" />
                                            <div className="h-24 w-full bg-zinc-800 rounded-lg mt-4 border border-zinc-700" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
