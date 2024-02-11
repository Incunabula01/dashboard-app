"use client";

import { GlobalContext } from "@/app/context";
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { LuAlignJustify, LuPlus } from "react-icons/lu";

export default function DashboardHeader() {
    const { sidebarOpen, setSidebarOpen } = useContext(GlobalContext);
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') router.push('/');
    }, [status, router]);

    return (
        <>
            <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow">
                <div className="flex flex-grow items-center gap-2 justify-between md:justify-end p-4 shadow md:px-6 2x1:px-11">
                    <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="inline-flex item-center justify-center bg-black px-4 py-2 text-large text-white font-medium tracking-wide uppercase">
                            {sidebarOpen ?
                                <LuPlus
                                    size={24}
                                    title="Hide Sidebar"
                                    className="transform  rotate-45"
                                /> :
                                <LuAlignJustify
                                    size={24}
                                    title="Show Sidebar"
                                />
                            }
                        </button>
                    </div>
                    <Link
                        href={status === 'unauthenticated' ? '/un-auth' : '/'}
                        className="md:hidden text-2xl"
                        onClick={() => setSidebarOpen(false)}>
                        Dashboard
                    </Link>
                    <button onClick={() =>
                        status === 'authenticated' ? signOut() : signIn('google')
                    } className="inline-flex item-center justify-center bg-black px-6 py-2 text-large text-white font-medium tracking-wide uppercase">
                        {status === 'authenticated' ? 'Logout' : 'Login'}
                    </button>
                </div>
            </header>
        </>
    )
}