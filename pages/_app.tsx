import Head from 'next/head'
import './global.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
    return <div>
        <Component {...pageProps} />
    </div>
}

export default MyApp