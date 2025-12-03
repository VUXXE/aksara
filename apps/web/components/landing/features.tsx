"use client";

import { motion } from "framer-motion";
import {
    Users,
    Megaphone,
    Layout,
    DollarSign,
    Headphones,
    ArrowUpRight,
    Bot,
    Workflow
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
    {
        title: "CRM & Leads",
        description: "AI-driven lead scoring and automated follow-ups.",
        icon: Users,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        colSpan: "md:col-span-2",
    },
    {
        title: "Marketing Automation",
        description: "Generate email campaigns and social posts with one click.",
        icon: Megaphone,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        colSpan: "md:col-span-1",
    },
    {
        title: "AI Website Builder",
        description: "Text-to-website generation with real-time editing.",
        icon: Layout,
        color: "text-pink-400",
        bg: "bg-pink-500/10",
        colSpan: "md:col-span-1",
    },
    {
        title: "Sales Pipeline",
        description: "Visual deal tracking and revenue forecasting.",
        icon: DollarSign,
        color: "text-green-400",
        bg: "bg-green-500/10",
        colSpan: "md:col-span-2",
    },
    {
        title: "Smart Support",
        description: "24/7 AI chatbots that resolve 80% of queries.",
        icon: Headphones,
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        colSpan: "md:col-span-3",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5">
                        Powerful Modules
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Everything you need to <span className="text-primary">grow</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Replace your fragmented tech stack with one cohesive platform powered by advanced AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={feature.colSpan}
                        >
                            <Card className="h-full bg-zinc-900/80 border-white/10 hover:border-primary/50 transition-colors group cursor-pointer overflow-hidden relative backdrop-blur-md">
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-transparent to-${feature.color.split('-')[1]}-500/10`} />

                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className={`size-6 ${feature.color}`} />
                                    </div>
                                    <CardTitle className="flex items-center justify-between text-white">
                                        {feature.title}
                                        <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-zinc-300 group-hover:text-white transition-colors">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
