import React from "react"
import { countRowsInTable, fetchRevenue, countRowsInTableByStatus } from "@/lib/data";
import { Card, Metric, Text } from "@tremor/react";
import RevenueAreaChart from "@/components/RevenueAreaChart";
import InvoicesDonutChart from "@/components/InvoicesDonutChart";
import BookingDonutChart from "@/components/BookingDonutChart";
import TicketsDonutChart from "@/components/TicketsDonutChart";

export default async function Dashboard() {
    const scheduledBookings = await countRowsInTable("call_bookings")
    const customers = await countRowsInTable("customers")
    const pendingTickets = await countRowsInTable("tickets")
    const pendingInvoices = await countRowsInTable("invoices")
    const chartdata = await fetchRevenue()
    const invoicesDonutChart = await countRowsInTableByStatus('invoices')
    const bookingsDonutChart = await countRowsInTableByStatus('call_bookings')
    const ticketsDonutChart = await countRowsInTableByStatus('tickets')
    return (
        <div className="flex flex-col space-y-10 w-full p-6 justify-evenly overflow-scroll">
            <div className="flex justify-between w-full">
                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                    <Text>Customers</Text>
                    <Metric>{customers}</Metric>
                </Card>
                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                    <Text>Scheduled Bookings</Text>
                    <Metric>{scheduledBookings}</Metric>
                </Card>
                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                    <Text>Pending Tickets</Text>
                    <Metric>{pendingTickets}</Metric>
                </Card>
                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                    <Text>Pending Invoices</Text>
                    <Metric>{pendingInvoices}</Metric>
                </Card>
            </div>
            <div className="flex justify-between w-full">
                <InvoicesDonutChart data={invoicesDonutChart}/>
                <BookingDonutChart data={bookingsDonutChart}/>
                <TicketsDonutChart data={ticketsDonutChart}/>
            </div>
            <div className="flex w-full">
                <RevenueAreaChart data={chartdata}/>
            </div>
        </div>
    )
}