import React from 'react'

interface TextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
}

export default function TextInput({ label = '', ...props }: TextInputProps) {
    return (
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                {label}
            </label>
            <input 
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                type="text" 
                {...props}
            />
        </div>
    )
}
