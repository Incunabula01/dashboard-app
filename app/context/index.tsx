'use client';

import { createContext, useState } from "react";

const initState = {
    sidebarOpen: true
};

export const GlobalContext = createContext(initState);

export default function GlobalState({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(initState.sidebarOpen);

    return <GlobalContext.Provider value={{ sidebarOpen, setSidebarOpen } }>{ children }</GlobalContext.Provider>
}
