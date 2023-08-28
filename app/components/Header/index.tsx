"use client";

import { GlobalContext } from "@/app/context";
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function DashboardHeader() {
    const { sidebarOpen, setSidebarOpen } = useContext(GlobalContext);
    const { status } = useSession();
    const router = useRouter();
    console.info('Current session', status);

    useEffect(() => {
        if (status === 'authenticated') router.push('/');
    }, [status, router]);

    return (
        <>
            <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow">
                <div className="flex flex-grow items-center gap-2 justify-end p-4 shadow md:px-6 2x1:px-11">
                    <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="inline-flex item-center justify-center bg-black px-6 py-2 text-large text-white font-medium tracking-wide uppercase">
                            {sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                        </button>
                    </div>
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