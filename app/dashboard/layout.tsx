import type { Metadata } from 'next'
import SideBar from '@/components/SideBar'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className='lg:flex lg:fixed lg:top-20 lg:right-8 h-[80%] w-[80%] shadow-lg rounded-lg p-4'>
                {children}
            </div>
            <SideBar />
        </div>
    )
}
