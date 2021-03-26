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
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css" />
                <script async src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"></script>
                <div id="snipcart" data-config-modal-style="side" data-api-key="M2JkMTNmYTUtYTljMC00OTI0LTk2ZGEtMGNiMTcwNmM3ZmY0NjM3NTEyOTc3NjgwNTcxNjg0" hidden></div>
                <title>{title ? title : "Lorem Ipsum"}</title>
            </Head>
            <Navbar className="sticky top-0" />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}
