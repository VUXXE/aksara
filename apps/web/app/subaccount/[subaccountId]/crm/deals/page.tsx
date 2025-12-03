"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, MoreHorizontal, DollarSign, Calendar } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const columns = [
    {
        id: "lead",
        title: "New Leads",
        color: "bg-blue-500/10 text-blue-500",
        deals: [
            { id: 1, title: "Acme Corp Redesign", value: "$5,000", date: "Oct 12" },
            { id: 2, title: "Startup Landing Page", value: "$1,200", date: "Oct 14" },
        ]
    },
    {
        id: "contacted",
        title: "Contacted",
        color: "bg-yellow-500/10 text-yellow-500",
        deals: [
            { id: 3, title: "Mobile App MVP", value: "$15,000", date: "Oct 10" },
        ]
    },
    {
        id: "proposal",
        title: "Proposal Sent",
        color: "bg-purple-500/10 text-purple-500",
        deals: [
            { id: 4, title: "E-commerce Platform", value: "$25,000", date: "Oct 08" },
            { id: 5, title: "SEO Audit", value: "$800", date: "Oct 15" },
        ]
    },
    {
        id: "negotiation",
        title: "Negotiation",
        color: "bg-orange-500/10 text-orange-500",
        deals: [
            { id: 6, title: "Enterprise CRM", value: "$50,000", date: "Oct 01" },
        ]
    },
    {
        id: "won",
        title: "Closed Won",
        color: "bg-green-500/10 text-green-500",
        deals: [
            { id: 7, title: "Logo Design", value: "$500", date: "Sep 28" },
        ]
    }
]

export default function DealsPage() {
    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] p-4 gap-4">
            <div className="flex items-center justify-between shrink-0">
                <h1 className="text-2xl font-bold tracking-tight">Deals Pipeline</h1>
                <div className="flex gap-2">
                    <Button variant="outline">Filter</Button>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Deal
                    </Button>
                </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 h-full">
                {columns.map((col) => (
                    <div key={col.id} className="w-[300px] shrink-0 flex flex-col gap-2">
                        <div className="flex items-center justify-between p-2 rounded-md bg-muted/50">
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${col.color.split(' ')[0].replace('/10', '')}`} />
                                <span className="font-medium text-sm">{col.title}</span>
                                <Badge variant="secondary" className="text-xs h-5 px-1.5 min-w-5 justify-center">
                                    {col.deals.length}
                                </Badge>
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                                <Plus className="h-3 w-3" />
                            </Button>
                        </div>

                        <ScrollArea className="h-full">
                            <div className="flex flex-col gap-2 pr-2">
                                {col.deals.map((deal) => (
                                    <Card key={deal.id} className="cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors">
                                        <CardHeader className="p-3 pb-0 space-y-0">
                                            <div className="flex justify-between items-start">
                                                <CardTitle className="text-sm font-medium leading-tight">
                                                    {deal.title}
                                                </CardTitle>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2 -mt-2 text-muted-foreground">
                                                    <MoreHorizontal className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-3 pt-2">
                                            <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                                                <div className="flex items-center gap-1">
                                                    <DollarSign className="h-3 w-3" />
                                                    <span>{deal.value}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{deal.date}</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                ))}
            </div>
        </div>
    )
}
