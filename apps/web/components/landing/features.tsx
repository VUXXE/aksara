"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    Bot,
    Globe,
    Layout,
    MessageSquare,
    Sparkles,
    Users,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: Layout,
        title: "Website Builder",
        description:
            "Create stunning, high-converting websites in minutes with our AI-powered drag-and-drop builder.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
    },
    {
        icon: Bot,
        title: "AI Automation",
        description:
            "Automate your workflows, lead scoring, and customer follow-ups with intelligent AI agents.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        icon: Users,
        title: "CRM & Leads",
        description:
            "Manage your entire pipeline, track leads, and close deals faster with our integrated CRM.",
        color: "text-green-400",
        bg: "bg-green-500/10",
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description:
            "Gain deep insights into your agency's performance with real-time dashboards and reporting.",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
    },
    {
        icon: MessageSquare,
        title: "Unified Inbox",
        description:
            "Streamline communication by bringing emails, SMS, and social messages into one inbox.",
        color: "text-pink-400",
        bg: "bg-pink-500/10",
    },
    {
        icon: Globe,
        title: "White Labeling",
        description:
            "Customize the platform with your own branding and resell it to your clients as your own.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
];

export const Features = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Everything you need to scale
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Powerful tools designed to help you build, market, and manage your
                            agency from a single platform.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            <div
                                className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                            >
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
