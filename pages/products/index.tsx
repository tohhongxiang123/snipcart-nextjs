import React from 'react'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import ProductPreview from '../../components/ProductPreview'
import { getAllProducts, IProduct } from '../../utils'

interface IndexProps {
    products: IProduct[]
}

export default function Index({ products = [] }: IndexProps) {
    return (
        <Layout title="All Products">
            <section className="p-4">
                <h2 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 mb-2 mx-auto">All Products</h2>
                <div className="grid grid-flow-rowgap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-start">
                    {products.map(product => <div className="mx-auto my-4"><ProductPreview product={product} key={product.id} /></div>)}
                </div>
            </section>
            <div id="snipcart" data-config-modal-style="side" data-api-key="M2JkMTNmYTUtYTljMC00OTI0LTk2ZGEtMGNiMTcwNmM3ZmY0NjM3NTEyOTc3NjgwNTcxNjg0" />
            <Footer />
        </Layout>
    )
}

export async function getStaticProps(ctx) {
    const { products } = await getAllProducts()
    return { props: { products } }
}
