"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Mail, BarChart, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function MarketingPage() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Marketing Campaigns</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create Campaign
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {[
                    { title: "Summer Sale", status: "Active", sent: 12500, openRate: "24%", clickRate: "3.2%" },
                    { title: "Welcome Series", status: "Automated", sent: 450, openRate: "68%", clickRate: "12%" },
                    { title: "Product Update", status: "Draft", sent: 0, openRate: "-", clickRate: "-" },
                ].map((campaign, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div className="space-y-1">
                                <CardTitle className="text-base font-medium">{campaign.title}</CardTitle>
                                <CardDescription>Email Campaign</CardDescription>
                            </div>
                            <Badge variant={campaign.status === 'Active' ? 'default' : campaign.status === 'Draft' ? 'outline' : 'secondary'}>
                                {campaign.status}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Send className="h-3 w-3" /> Sent</span>
                                    <span className="font-bold">{campaign.sent.toLocaleString()}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Mail className="h-3 w-3" /> Open Rate</span>
                                    <span className="font-bold">{campaign.openRate}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted-foreground flex items-center gap-1"><BarChart className="h-3 w-3" /> Clicks</span>
                                    <span className="font-bold">{campaign.clickRate}</span>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <Button variant="ghost" size="sm">View Report</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
