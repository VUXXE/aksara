"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Command, CommandInput } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Send, Mail, Globe, Workflow } from "lucide-react";

export function AIDemo() {
    const [activeTab, setActiveTab] = useState("marketing");
    const [isTyping, setIsTyping] = useState(false);

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Badge variant="outline" className="mb-4 border-purple-500/20 text-purple-400 bg-purple-500/5">
                            <Sparkles className="size-3 mr-2" />
                            Aksara AI
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Your new <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                Super Employee
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Just describe what you need, and Aksara handles the execution. From drafting emails to building landing pages, it's all automated.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Natural Language Control", desc: "No code required. Just speak your mind." },
                                { title: "Cross-Module Intelligence", desc: "Data flows seamlessly between CRM and Marketing." },
                                { title: "Real-time Optimization", desc: "AI constantly tweaks performance for better results." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="size-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                        <span className="font-bold text-sm">{i + 1}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">{item.title}</h4>
                                        <p className="text-sm text-zinc-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full opacity-50" />

                        <div className="relative glass-card rounded-2xl p-6 border border-white/10">
                            <Tabs defaultValue="marketing" onValueChange={setActiveTab} className="w-full">
                                <TabsList className="grid w-full grid-cols-3 mb-6 bg-black/20">
                                    <TabsTrigger value="marketing">
                                        <Mail className="size-4 mr-2" /> Marketing
                                    </TabsTrigger>
                                    <TabsTrigger value="website">
                                        <Globe className="size-4 mr-2" /> Website
                                    </TabsTrigger>
                                    <TabsTrigger value="workflow">
                                        <Workflow className="size-4 mr-2" /> Workflow
                                    </TabsTrigger>
                                </TabsList>

                                <div className="bg-black/40 rounded-xl border border-white/5 p-4 min-h-[300px] flex flex-col">
                                    <div className="flex-1 space-y-4 mb-4">
                                        {/* Mock Chat History */}
                                        <div className="flex justify-end">
                                            <div className="bg-primary/20 text-primary-foreground px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[80%]">
                                                {activeTab === 'marketing' && "Create a launch email for our new summer collection."}
                                                {activeTab === 'website' && "Build a landing page for the summer sale with a countdown."}
                                                {activeTab === 'workflow' && "When a lead visits the pricing page, send them a discount code."}
                                            </div>
                                        </div>

                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-white/5 text-foreground px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[90%] border border-white/5">
                                                <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                                                    <Sparkles className="size-3 text-purple-400" /> Aksara AI
                                                </div>
                                                {activeTab === 'marketing' && (
                                                    <div className="space-y-2">
                                                        <p>Here's a draft for the "Summer Collection Launch" campaign:</p>
                                                        <div className="bg-white text-black p-3 rounded-md text-xs font-sans">
                                                            <strong>Subject:</strong> ☀️ Summer is here! <br />
                                                            <p className="mt-1">Discover our breezy new styles designed for the heat...</p>
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab === 'website' && (
                                                    <div className="space-y-2">
                                                        <p>I've generated a layout with a Hero section, Product Grid, and Countdown Timer.</p>
                                                        <div className="h-20 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center">
                                                            <span className="text-xs text-zinc-500">Preview Loading...</span>
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab === 'workflow' && (
                                                    <div className="space-y-2">
                                                        <p>Workflow created: <strong>High Intent Visitor</strong></p>
                                                        <div className="flex items-center gap-2 text-xs">
                                                            <span className="bg-zinc-800 px-2 py-1 rounded">Page Visit: /pricing</span>
                                                            <span>→</span>
                                                            <span className="bg-zinc-800 px-2 py-1 rounded">Wait 2 mins</span>
                                                            <span>→</span>
                                                            <span className="bg-zinc-800 px-2 py-1 rounded">Send Email</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="relative">
                                        <Command className="rounded-lg border border-white/10 bg-black/20">
                                            <CommandInput placeholder="Ask Aksara to do something..." />
                                        </Command>
                                        <Button size="icon" className="absolute right-1 top-1 h-8 w-8 rounded-md">
                                            <Send className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
