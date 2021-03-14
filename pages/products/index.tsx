import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductPreview, { IProduct } from '../../components/ProductPreview'
import { getAllProducts } from '../../utils'

interface IndexProps {
    products: IProduct[]
}

export default function Index({ products = [] }: IndexProps) {
    return (
        <div>
            <Header />
            {products.length > 0 ?
                products.map(product => <ProductPreview product={product} key={product.id} />) :
                <p>No products found</p>
            }
            <div id="snipcart" data-config-modal-style="side" data-api-key="M2JkMTNmYTUtYTljMC00OTI0LTk2ZGEtMGNiMTcwNmM3ZmY0NjM3NTEyOTc3NjgwNTcxNjg0" />
            <div className="snipcart-summary">
                Number of items: <span className="snipcart-items-count">0</span>
                Total price: <span className="snipcart-total-price">$0.00</span>
                <button className="snipcart-checkout">Checkout</button>
            </div>
            <Footer />
        </div>
    )
}

export async function getStaticProps(ctx) {
    const { products } = await getAllProducts()
    return { props: { products } }
}
