import React, { useEffect, useMemo, useState } from 'react'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import ProductPreview from '../../components/ProductPreview'
import TextInput from '../../components/TextInput'
import { getAllProducts, IProduct } from '../../utils'

interface IndexProps {
    products: IProduct[]
}

export default function Index({ products = [] }: IndexProps) {
    const [text, setText] = useState('')

    const filteredProducts = useMemo(() => {
        if (!text) return products
        return products.filter(product => product.name.toLowerCase().includes(text.toLowerCase()))
    }, [text])

    return (
        <Layout title="All Products">
            <section className="p-4">
                <div className="p-4 flex flex-col justify-center items-center">
                    <TextInput label="Search" onChange={e => setText(e.target.value)} value={text} />
                </div>
                <div>
                    <h2 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 mb-2 mx-auto">All Products</h2>
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-flow-rowgap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-start">
                            {filteredProducts.map(product => <div className="mx-auto my-4"><ProductPreview product={product} key={product.id} /></div>)}
                        </div>
                    ) : (
                        <p className="text-center font-semibold text-gray-400"><i>No products found...</i></p>
                    )}

                </div>
            </section>
            <div id="snipcart" data-config-modal-style="side" data-api-key="M2JkMTNmYTUtYTljMC00OTI0LTk2ZGEtMGNiMTcwNmM3ZmY0NjM3NTEyOTc3NjgwNTcxNjg0" />
        </Layout>
    )
}

export async function getStaticProps(ctx) {
    const { products } = await getAllProducts()
    return { props: { products } }
}
