import React from "react"
import { fetchInvoices, fetchInvoicesByStatus } from "@/lib/data"
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


export default async function Invoices() {
    const invoices = await fetchInvoices()
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Customer ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice_id}>
                        <TableCell className="font-medium">{invoice.invoice_id}</TableCell>
                        <TableCell>{invoice.customer_id}</TableCell>
                        <TableCell><BadgeStatus status={invoice.status}/></TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell className="text-right">{invoice.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
}
