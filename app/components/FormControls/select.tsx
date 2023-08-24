import React, { ChangeEventHandler } from 'react'

type SelectProps = {
    label?: string;
    value?: string;
    onOptionChange: ChangeEventHandler<HTMLSelectElement>;
    options?: Array<Record<string, string>>;
}

export default function Select({ label, value, onOptionChange, options = [] }: SelectProps) {
    return (
        <>
            <div className="relative">
                <p className="pt-0 pr-2 pb-0 p1-2 absolute -mt-3 mr-0 mb-0 m1-2 font-medium text-gray-600 bg-white">{label}</p>
                <select value={value} onChange={onOptionChange} className='border placeholder-gray focus:outline-none w-full p-4 m-0 text-base block bg-white rounded-md'>
                    <option id="" value="">Select</option>
                    {
                        options && options.length ? 
                        options.map(option => (<option key={option.id} id={option.id} value={option.value}>{option.label}</option>)) :
                        null
                    }
                </select>
            </div>
        </>
    )
}
