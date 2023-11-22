import React from "react"
import { countRowsInTable, fetchRevenue, valueFormatter } from "@/lib/data";
import { Card, Metric, Text, Title, AreaChart, ValueFormatter } from "@tremor/react";
import RevenueAreaChart from "@/components/RevenueAreaChart";

export default async function Dashboard() {
    const scheduledBookings = await countRowsInTable("call_bookings")
    const customers = await countRowsInTable("customers")
    const pendingTickets = await countRowsInTable("tickets")
    const pendingInvoices = await countRowsInTable("invoices")
    const chartdata = await fetchRevenue()
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between">
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
            <div>
                <RevenueAreaChart data={chartdata}/>
            </div>
        </div>
    )
}