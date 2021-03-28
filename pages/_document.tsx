import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://app.snipcart.com" />
                    <link rel="preconnect" href="https://cdn.snipcart.com" />
                    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css" />
                    <script async src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"></script>
                    <div id="snipcart" data-config-modal-style="side" data-api-key="M2JkMTNmYTUtYTljMC00OTI0LTk2ZGEtMGNiMTcwNmM3ZmY0NjM3NTEyOTc3NjgwNTcxNjg0" hidden></div>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument