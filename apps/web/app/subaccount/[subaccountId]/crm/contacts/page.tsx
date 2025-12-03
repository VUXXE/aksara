"use client"

import { useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, MoreHorizontal, Mail, Phone } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const contactsData = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        phone: "+1 555-0101",
        company: "TechCorp",
        status: "Lead",
        lastContact: "2 days ago",
        avatar: "/avatars/01.png",
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        phone: "+1 555-0102",
        company: "DesignStudio",
        status: "Customer",
        lastContact: "1 week ago",
        avatar: "/avatars/02.png",
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie@example.com",
        phone: "+1 555-0103",
        company: "RetailInc",
        status: "Lead",
        lastContact: "3 hours ago",
        avatar: "/avatars/03.png",
    },
    {
        id: 4,
        name: "Diana Prince",
        email: "diana@example.com",
        phone: "+1 555-0104",
        company: "Amazonia",
        status: "Churned",
        lastContact: "1 month ago",
        avatar: "/avatars/04.png",
    },
    {
        id: 5,
        name: "Evan Wright",
        email: "evan@example.com",
        phone: "+1 555-0105",
        company: "WrightLogic",
        status: "Customer",
        lastContact: "5 mins ago",
        avatar: "/avatars/05.png",
    },
]

export default function ContactsPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredContacts = contactsData.filter(
        (contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.company.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Contacts</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Contact
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search contacts..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]"></TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Last Contact</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredContacts.map((contact) => (
                            <TableRow key={contact.id}>
                                <TableCell>
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={contact.avatar} alt={contact.name} />
                                        <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span className="font-medium">{contact.name}</span>
                                        <span className="text-xs text-muted-foreground">{contact.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={contact.status === 'Customer' ? 'default' : contact.status === 'Lead' ? 'secondary' : 'outline'}>
                                        {contact.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{contact.company}</TableCell>
                                <TableCell>{contact.lastContact}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>
                                                <Mail className="mr-2 h-4 w-4" /> Email
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Phone className="mr-2 h-4 w-4" /> Call
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
