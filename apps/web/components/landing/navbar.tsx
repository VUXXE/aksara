"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-md border-b border-white/10"
        >
            <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50">
                    <span className="text-xl font-bold text-primary">A</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Aksara</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
                <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
                <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                <Link href="#about" className="hover:text-white transition-colors">About</Link>
            </div>

            <div className="flex items-center gap-4">
                <ModeToggle />
                <Link href="/agency/sign-in" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hidden sm:block">
                    Sign In
                </Link>
                <Link href="/agency/sign-up">
                    <Button className="rounded-full px-6">Get Started</Button>
                </Link>
            </div>
        </motion.nav>
    );
}
