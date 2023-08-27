"use client";
import { PageProps } from '@/.next/types/app/page';
import React from 'react'
import { FaFrownOpen } from 'react-icons/fa';

export default function UnAuth(props: PageProps) {
    
    return (
        <>
            <div className="rounded-sm border border-stroke bg-white py-6 px-7 5 shadow">
                <div className="flex h-11 5 w-11 5 items-center justify-center rounded-full bg-meta-2 text-danger">
                    <FaFrownOpen size={50}/>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <h4 className="text-title-md font-bold text-danger">You Are Not Authorized</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
