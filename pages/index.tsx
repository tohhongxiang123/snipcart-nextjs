import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Index() {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css" />
                <script async src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"></script>
                <div id="snipcart" data-config-modal-style="side" data-api-key="M2JkMTNmYTUtYTljMC00OTI0LTk2ZGEtMGNiMTcwNmM3ZmY0NjM3NTEyOTc3NjgwNTcxNjg0" hidden></div>
            </Head>
            <div>
                <h1>This is the main page</h1>
                <p>Look at our <Link href="/products">products</Link> and stuff</p>
                <button className="snipcart-checkout">Show cart</button>
            </div>
        </div>
    )
}