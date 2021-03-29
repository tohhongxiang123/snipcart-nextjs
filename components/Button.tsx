import React from 'react'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color: "primary" | "secondary" | "outlined" | "none"
}

const baseClasses =  "px-4 py-2 border border-transparent text-base font-medium rounded-md md:text-lg shadow-md"
const colors = {
    primary: "text-white bg-indigo-600 hover:bg-indigo-700",
    secondary: "text-black bg-gray-200 hover:bg-gray-300",
    outlined: "bg-transparent hover:bg-gray-200 border border-gray-300",
    none: "text-base hover:bg-gray-100"
}

export default function Button({ children, color, className, ...props }) {
    return (
        <button {...props} className={`${baseClasses} ${colors[color]} ${className}`} >
            {children}
        </button>
    )
}
