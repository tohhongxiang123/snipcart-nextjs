import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

interface LayoutProps {
    children: React.ReactNode | React.ReactNodeArray,
    title?: string
}

export default function Layout({ title, children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>{title ? title : "Lorem Ipsum"}</title>
            </Head>
            <Navbar className="sticky top-0 z-10" />
            <main className="flex-grow z-0">
                {children}
            </main>
            <Footer />
        </div>
    )
}
