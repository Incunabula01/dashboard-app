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
                <select value={value} onChange={onOptionChange} className='appearance-none border placeholder-gray focus:outline-none w-full p-4 pr-8 m-0 text-base block bg-white rounded-md'>
                    <option id="" value="" key={'select'}>Select</option>
                    {
                        options && options.length ?
                            options.map(option => (<option key={option.id} id={option.id} value={option.id}>{option.label}</option>)) :
                            null
                    }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4z" /></svg>
                </div>
            </div>
        </>
    )
}
