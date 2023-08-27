"use client";
import { GlobalContext } from '@/app/context';
import React, { useContext } from 'react';
import PulseLoader from "react-spinners/PulseLoader";

export default function Loader() {
    const { loader } = useContext(GlobalContext);

    if(loader) {
        return <div className="w-full min-h-screen flex justify-center items-center">
            <PulseLoader 
                color="#AEB7C0"
                loading={loader}
                size={35}
                data-textid="Loader"
            />
        </div>
    }
    return null;
}
