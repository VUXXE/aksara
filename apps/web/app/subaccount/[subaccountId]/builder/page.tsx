"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Layout, Monitor, Smartphone, Tablet, RefreshCw, Check } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BuilderPage() {
    const [isGenerating, setIsGenerating] = useState(false)
    const [prompt, setPrompt] = useState("")
    const [generated, setGenerated] = useState(false)

    const handleGenerate = () => {
        setIsGenerating(true)
        setTimeout(() => {
            setIsGenerating(false)
            setGenerated(true)
        }, 2000)
    }

    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col">
            <div className="flex items-center justify-between border-b px-4 py-3">
                <div className="flex items-center gap-2">
                    <Layout className="h-5 w-5 text-primary" />
                    <h1 className="font-semibold">AI Website Builder</h1>
                    <Badge variant="outline" className="ml-2">Beta</Badge>
                </div>
                <div className="flex items-center gap-2">
                    <Tabs defaultValue="desktop">
                        <TabsList className="h-8">
                            <TabsTrigger value="desktop" className="h-7 w-8 p-0"><Monitor className="h-4 w-4" /></TabsTrigger>
                            <TabsTrigger value="tablet" className="h-7 w-8 p-0"><Tablet className="h-4 w-4" /></TabsTrigger>
                            <TabsTrigger value="mobile" className="h-7 w-8 p-0"><Smartphone className="h-4 w-4" /></TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <Button size="sm" variant="outline">Publish</Button>
                    <Button size="sm">Export Code</Button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar Controls */}
                <div className="w-80 border-r bg-muted/10 p-4 flex flex-col gap-4 overflow-y-auto">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Describe your website</label>
                        <Textarea
                            placeholder="e.g. A portfolio for a photographer with a dark theme, gallery grid, and contact form..."
                            className="min-h-[120px] resize-none"
                            value={prompt}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
                        />
                        <Button
                            className="w-full"
                            onClick={handleGenerate}
                            disabled={isGenerating || !prompt}
                        >
                            {isGenerating ? (
                                <>
                                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Generating...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="mr-2 h-4 w-4" /> Generate Site
                                </>
                            )}
                        </Button>
                    </div>

                    {generated && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-500">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Theme</label>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="h-8 rounded-md bg-zinc-900 border-2 border-primary cursor-pointer" />
                                    <div className="h-8 rounded-md bg-white border border-border cursor-pointer" />
                                    <div className="h-8 rounded-md bg-blue-600 border border-border cursor-pointer" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Sections</label>
                                <div className="space-y-2">
                                    {['Hero', 'Features', 'Testimonials', 'Contact'].map((section) => (
                                        <div key={section} className="flex items-center justify-between p-2 rounded-md border bg-background">
                                            <span className="text-sm">{section}</span>
                                            <Button variant="ghost" size="icon" className="h-6 w-6"><Check className="h-3 w-3" /></Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Preview Area */}
                <div className="flex-1 bg-muted/20 p-8 overflow-y-auto flex items-center justify-center">
                    {generated ? (
                        <Card className="w-full max-w-4xl h-full min-h-[600px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 border-0 ring-1 ring-border/50">
                            {/* Mock Website Preview */}
                            <div className="h-full flex flex-col bg-background">
                                {/* Mock Nav */}
                                <div className="h-14 border-b flex items-center justify-between px-6">
                                    <div className="font-bold text-lg">Portfolio</div>
                                    <div className="flex gap-4 text-sm">
                                        <span>Work</span>
                                        <span>About</span>
                                        <span>Contact</span>
                                    </div>
                                </div>
                                {/* Mock Hero */}
                                <div className="flex-1 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/50 p-12 text-center">
                                    <div className="max-w-2xl space-y-6">
                                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Capturing Moments in Time</h1>
                                        <p className="text-lg text-muted-foreground">Professional photography for events, portraits, and commercial projects.</p>
                                        <div className="flex justify-center gap-4">
                                            <Button size="lg">View Gallery</Button>
                                            <Button size="lg" variant="outline">Book Now</Button>
                                        </div>
                                    </div>
                                </div>
                                {/* Mock Grid */}
                                <div className="h-64 grid grid-cols-3 gap-1">
                                    <div className="bg-zinc-200 dark:bg-zinc-800" />
                                    <div className="bg-zinc-300 dark:bg-zinc-700" />
                                    <div className="bg-zinc-200 dark:bg-zinc-800" />
                                </div>
                            </div>
                        </Card>
                    ) : (
                        <div className="text-center space-y-4 max-w-md">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
                                <Layout className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Ready to build?</h3>
                            <p className="text-muted-foreground">
                                Enter a prompt on the left to generate a complete website layout using our advanced AI models.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
