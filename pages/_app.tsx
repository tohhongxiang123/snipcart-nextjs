import Head from 'next/head'
import './global.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
    return <div>
        <Head>
            <link rel="preconnect" href="https://app.snipcart.com" />
            <link rel="preconnect" href="https://cdn.snipcart.com" />
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css" />
            <script async src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"></script>
        </Head>
        <div id="snipcart" data-config-modal-style="side" data-api-key="M2JkMTNmYTUtYTljMC00OTI0LTk2ZGEtMGNiMTcwNmM3ZmY0NjM3NTEyOTc3NjgwNTcxNjg0" hidden></div>
        <Component {...pageProps} />
    </div>
}

export default MyApp