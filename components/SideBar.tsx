import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu, LayoutDashboard, Bot } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SideBar() {
    return (
        <nav className='space-y-2 fixed left-8 w-[15%] top-20 shadow-xl rounded-md'>
            <div className=''><h2 className='text-[1.2rem] font-[700] p-4 text-center'>Dashboard</h2></div>
            <div className='hidden flex-col items-center space-y-4 lg:flex space-x-2 py-6'>
                <Button variant='ghost' className='w-11/12' asChild><Link href='/dashboard' className='font-[700]'>Home</Link></Button>
                <Button variant='ghost' className='w-11/12' asChild><Link href='/dashboard/invoices' className='font-[700]'>Invoices</Link></Button>
                <Button variant='ghost' className='w-11/12' asChild><Link href='/dashboard/call-bookings' className='font-[700]'>Call Bookings</Link></Button>
                <Button variant='ghost' className='w-11/12' asChild><Link href='/dashboard/tickets' className='font-[700]'>Tickets</Link></Button>
                <Button variant='ghost' className='w-11/12' asChild><Link href='/dashboard/customers' className='font-[700]'>Customers</Link></Button>
                <Button variant='default' className='w-11/12' asChild><Link href='/' className='font-[700]'>Sign Out</Link></Button>
            </div>
            <div className='lg:hidden flex items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline'><Menu /> Dashboard</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem asChild><Link href='/dashboard'>Home</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link href='/dashboard/invoices'>Invoices</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link href='/dashboard/call-bookigs'>Call Bookings</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link href='/dashboard/tickets'>Tickets</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link href='/dashboard/customers'>Customers</Link></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild><Button asChild><Link href='/'><LayoutDashboard className='mr-2' />Sign Out</Link></Button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}