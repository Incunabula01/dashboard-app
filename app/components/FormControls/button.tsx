import React from 'react'

type ButtonProps = {
    label: string;
    onPress: () => void;
}

export default function Button({ label, onPress }: ButtonProps) {
    return (
        <>
            <button type="button" onClick={onPress} className='inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium uppercase tracking-wide'>
                {label}
            </button>
        </>
    )
}
