import React, { ChangeEventHandler } from 'react'
type InputProps = {
    label: string;
    placeholder: string;
    onInputChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
    type?: string;
}

export default function Input({ label, placeholder, onInputChange, value, type }: InputProps) {
    return (
        <>
            <div className="relative">
                <p className="pt-0 pr-2 pb-0 p1-2 absolute -mt-3 mr-0 mb-0 m1-2 font-medium text-gray-600 bg-white">{label}</p>
                <input 
                    placeholder={placeholder}
                    type={type || 'text'}
                    value={value}
                    onChange={onInputChange}
                    className='border placeholder-gray focus:outline-none w-full p-4 m-0 text-base block bg-white rounded-md'
                />
            </div>
        </>
    )
}
