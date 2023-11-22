import React from "react"
import { fetchTickets } from "@/lib/data"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import BadgeStatus from "@/components/BadgeStatus"


export default async function Tickets() {
    const tickets = await fetchTickets()
    return (
        <Table>
            <TableCaption>A list of your recent tickets.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Ticket ID</TableHead>
                    <TableHead>Customer ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Commnet</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tickets.map((ticket) => (
                    <TableRow key={ticket.ticket_id}>
                        <TableCell className="font-medium">{ticket.ticket_id}</TableCell>
                        <TableCell>{ticket.customer_id}</TableCell>
                        <TableCell><BadgeStatus status={ticket.status}/></TableCell>
                        <TableCell className="text-right">{ticket.comment}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
}
