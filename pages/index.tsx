import React from 'react'
import Head from 'next/Head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Product, { IProduct } from '../components/Product'

interface IndexProps {
    products: IProduct[]
}

export default function Index({ products = [] }: IndexProps) {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css" />
                <script async src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"></script>
                <div id="snipcart" data-config-modal-style="side" data-api-key="M2JkMTNmYTUtYTljMC00OTI0LTk2ZGEtMGNiMTcwNmM3ZmY0NjM3NTEyOTc3NjgwNTcxNjg0" />
            </Head>
            <Header />
            {products.map(product => <Product product={product} key={product.id} />)}
            <div className="snipcart-summary">
                Number of items: <span className="snipcart-items-count">0</span>
                Total price: <span className="snipcart-total-price">$0.00</span>
                <button className="snipcart-checkout">Checkout</button>
            </div>
            <Footer />
        </div>
    )
}

Index.getInitialProps = async (ctx) => {
    const products: IProduct[] = [{
        id: '1',
        name: 'TestProduct',
        price: 25,
        url: 'test.url',
        description: 'test description',
        image: '/gourami.jpg',
    }, {
        id: '2',
        name: 'TestProduct2',
        price: 250,
        url: 'test.url2',
        description: 'test description 2',
        image: '/guppy.jpg',
    }, {
        id: '3',
        name: 'TestProduct3',
        price: 2500,
        url: 'test.url3',
        description: 'test description 3',
        image: '/betta.webp',
    }]

    return { products }
}
