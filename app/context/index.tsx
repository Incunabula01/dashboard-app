'use client';

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

interface AppState {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    loader: boolean;
    setLoader: Dispatch<SetStateAction<boolean>>;
};

const initState = {
    sidebarOpen: true,
    setSidebarOpen: () => {},
    loader: false,
    setLoader: () => {}
}

export const GlobalContext = createContext<AppState>(initState);

export default function GlobalState({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState<AppState["sidebarOpen"]>(initState.sidebarOpen);
    const [loader, setLoader] = useState<AppState["loader"]>(initState.loader);
    const { status } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        if(status === 'loading') setLoader(true);
        
        if(status === 'unauthenticated' && (pathName.includes('/' || '/products' || '/visitors'))){
            router.push('/un-auth');
        }
        if (status === 'authenticated' || status === 'unauthenticated') setLoader(false);
    }, [status, pathName, router]);

    return <GlobalContext.Provider value={{ sidebarOpen, setSidebarOpen, loader, setLoader } }>{ children }</GlobalContext.Provider>
}
