"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { LuLayoutDashboard } from 'react-icons/lu';
import { TbBrandProducthunt } from 'react-icons/tb';
import { PiUsersFourLight } from 'react-icons/pi';
import { GlobalContext } from '@/app/context';


const menuItems = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <LuLayoutDashboard size={25} />
    },
    {
        id: 'products',
        label: 'Products',
        path: '/products',
        icon: <TbBrandProducthunt size={25} />
    },
    {
        id: 'visitors',
        label: 'Visitors',
        path: '/visitors',
        icon: <PiUsersFourLight size={25} />
    }
]

export default function DashboardSidebar() {
    const { sidebarOpen, setSidebarOpen } = useContext(GlobalContext);
    const pathName = usePathname();
    const router = useRouter();
    const { status } = useSession();

    const handleNav = (pathname: string): void => {
        const menuPath = status === 'unauthenticated' ? '/un-auth' : pathname;
        setSidebarOpen(false);
        router.push(menuPath);
    };
    return (
        <>
            <aside className={`absolute left-0 top-[72px] md:top-0 z-9999 h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static -translate-x-full lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <header className="flex justify-between items-center gap-2 px-6 py-5.5 lg:py-6.5">
                    <Link 
                        href={status === 'unauthenticated' ? '/un-auth' : '/'} 
                        className="text-[40px] text-white"
                        onClick={() => setSidebarOpen(false)}>
                        Analytics
                    </Link>
                </header>
                <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
                    <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
                        <div>
                            <ul className='mb-6 flex flex-col gap-1.5'>
                                {menuItems.map(item => {
                                    return ((<li key={item.id}>
                                        <button className={`group relative cursor-pointer flex items-center gap-2 5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark
                                                ${pathName.includes(item.id) && 'bg-greydark'} 
                                                `}
                                            onClick={() => handleNav(item.path)}
                                        >
                                            {item.icon}{item.label}
                                        </button>
                                    </li>))
                                })}
                            </ul>
                        </div>

                    </nav>
                </div>

            </aside>
        </>
    )
}