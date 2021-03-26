import React, { useState } from 'react'
import Link from 'next/link'

interface NavbarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}

export default function Navbar({ className, ...props }: NavbarProps) {
    const [isHidden, setIsHidden] = useState(false)

    return (
        <nav className={`py-4 px-8 shadow-md bg-white ${className}`} {...props}>
            <div className="flex">
                <div className="mr-auto">
                    <Link href="/">
                        <a>
                            <span className="sr-only">Workflow</span>
                            <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                        </a>
                    </Link>
                </div>
                <button type="button"
                    className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isHidden ? "false" : "true"}
                    onClick={() => setIsHidden(c => !c)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <ul className={`hidden sm:flex space-x-4 items-center`}>
                    <li>
                        <button className="snipcart-checkout font-medium text-gray-500 hover:text-gray-900">
                        <svg height="32" viewBox="0 -31 512.00026 512" width="32" xmlns="http://www.w3.org/2000/svg" id="fi_1170678"><path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"></path><path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"></path><path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"></path></svg>
                        </button>
                    </li>
                    <li><Link href="/products"><a className="font-medium text-gray-500 hover:text-gray-900">Products</a></Link></li>
                </ul>
            </div>
            <ul className={`${isHidden ? 'hidden' : ''} sm:hidden text-center bg-white`}>
                <li className="p-4"><button className="snipcart-checkout font-medium text-gray-500 hover:text-gray-900">Show cart</button></li>
                <li className="p-4"><Link href="/products"><a className="font-medium text-gray-500 hover:text-gray-900">Products</a></Link></li>
            </ul>
        </nav>
    )
}
