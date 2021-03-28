import React, { useMemo, useState } from 'react'
import Layout from '../../components/Layout'
import PaginatedTable from '../../components/PaginatedTable'
import ProductPreview from '../../components/ProductPreview'
import TextInput from '../../components/TextInput'
import { getAllProducts, IProduct } from '../../utils'
import { useRouter } from 'next/router'

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
                    <PaginatedTable>
                        {filteredProducts.map(product => <div className="mx-auto my-4" key={product.id}><ProductPreview product={product} key={product.id} /></div>)}
                    </PaginatedTable>
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
