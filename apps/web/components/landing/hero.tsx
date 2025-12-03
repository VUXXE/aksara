"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-12 overflow-hidden text-center md:pt-32">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />

            <div className="container relative z-10 px-4 mx-auto space-y-8">
                {/* Badge */}
                <div className="animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                    <Badge
                        variant="outline"
                        className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary rounded-full backdrop-blur-sm"
                    >
                        <Sparkles className="w-3.5 h-3.5 mr-2 fill-primary" />
                        The Future of Agency Management
                    </Badge>
                </div>

                {/* Headline */}
                <h1 className="max-w-4xl mx-auto text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                    <span className="block text-foreground">Build.</span>
                    <span className="block bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                        Market.
                    </span>
                    <span className="block text-foreground">Scale.</span>
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                    The all-in-one platform designed to help agencies streamline operations,
                    manage clients, and accelerate growth with AI-powered tools.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                    <Button
                        asChild
                        size="lg"
                        className="h-12 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                    >
                        <Link href="/agency/sign-up">
                            Get Started Free
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-12 px-8 text-base rounded-full border-border/50 bg-background/50 backdrop-blur-sm hover:bg-accent/50 transition-all duration-300"
                    >
                        <Link href="#features">Learn More</Link>
                    </Button>
                </div>

                {/* Dashboard Preview (Placeholder for now, or use an image if available) */}
                <div className="relative mt-16 mx-auto max-w-6xl animate-fade-in-up opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
                    <div className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden aspect-video group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

                        {/* Mock UI Elements */}
                        <div className="absolute top-0 left-0 right-0 h-12 border-b border-border/50 bg-background/50 flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="ml-4 w-64 h-6 rounded-md bg-muted/50" />
                        </div>

                        <div className="absolute inset-0 top-12 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl uppercase tracking-widest select-none">
                            Dashboard Preview
                        </div>

                        {/* Optional: Use an actual image if one exists */}
                        {/* <Image src="/assets/preview.png" alt="Dashboard" fill className="object-cover opacity-90" /> */}
                    </div>

                    {/* Glow behind the dashboard */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl blur-2xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
            </div>
        </section>
    );
};
