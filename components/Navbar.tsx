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

export default function Navbar() {
    return (
        <nav className='flex fixed h-14 w-screen top-0 px-4 lg:px-8 items-center justify-between backdrop-blur'>
            <Link href='/'><div className='flex items-center'><Bot size={32} className='mr-2' /><p className='text-[1.2rem] font-[700]'>Chatty</p></div></Link>
            <div className='hidden lg:flex space-x-2 items-center'>
                <Button variant='ghost' asChild><Link href='/' className='font-[700]'>Home</Link></Button>
                <Button variant='ghost' asChild><Link href='/#about' className='font-[700]'>About</Link></Button>
                <Button variant='ghost' asChild><Link href='/#pricing' className='font-[700]'>Pricing</Link></Button>
                <Button variant='ghost' asChild><Link href='/#contact' className='font-[700]'>Contact</Link></Button>
                <Button variant='outline' className='font-[700]' asChild><Link href='/dashboard'><LayoutDashboard className='mr-2' />Dashboard</Link></Button>
            </div>
            <div className='lg:hidden flex items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline'><Menu /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem asChild><Link href='/'>Home</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link href='/#about'>About</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link href='/#pricing'>Pricing</Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link href='/#contact'>Contact</Link></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild><Button asChild><Link href='/dashboard'><LayoutDashboard className='mr-2' />Dashboard</Link></Button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}