import React from "react"
import { fetchCustomers } from "@/lib/data"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default async function Customers() {
    const customers = await fetchCustomers()
    return (
        <Table>
            <TableCaption>A list of your recent customers.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Customer ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">email</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {customers.map((customer, index) => (
                    <TableRow key={customer.id}>
                        <TableCell className="font-medium">{customer.id}</TableCell>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell className="text-right">{customer.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
}
