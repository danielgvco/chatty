import React from "react"
import { fetchBookings } from "@/lib/data"
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


export default async function CallBookings() {
    const bookings = await fetchBookings()
    return (
        <Table>
            <TableCaption>A list of your recent tickets.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Booking ID</TableHead>
                    <TableHead>Customer ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {bookings.map((booking) => (
                    <TableRow key={booking.booking_id}>
                        <TableCell className="font-medium">{booking.booking_id}</TableCell>
                        <TableCell>{booking.customer_id}</TableCell>
                        <TableCell><BadgeStatus status={booking.status}/></TableCell>
                        <TableCell>{booking.purpose}</TableCell>
                        <TableCell>{booking.booking_date}</TableCell>
                        <TableCell className="text-right">{booking.booking_time}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
}
