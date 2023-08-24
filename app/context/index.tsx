'use client';

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const initState = {
    sidebarOpen: true
};

export const GlobalContext = createContext(initState);

export default function GlobalState({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(initState.sidebarOpen);
    const { status } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        if(status === 'unauthenticated' && (pathName.includes('/' || '/products' || '/visitors'))){
            router.push('/un-auth');
        }
    }, [status])

    return <GlobalContext.Provider value={{ sidebarOpen, setSidebarOpen } }>{ children }</GlobalContext.Provider>
}
