import React from 'react'
import Link from 'next/link'
import { getAllProducts, getProductsByCategories, IProduct } from '../utils'
import ProductPreview from '../components/ProductPreview'
import Layout from '../components/Layout'
import Button from '../components/Button'

interface IndexProps {
    bestSellers: IProduct[],
    productCategories: { [key: string]: IProduct[] }
}

const MAX_PRODUCTS = 5
const MAX_CATEGORIES = 3

export default function Index({ bestSellers = [], productCategories = {} }: IndexProps) {
    return (
        <Layout>
            <div>
                <section className="text-center px-8 py-16 flex flex-col items-center">
                    <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 mb-4">Lorem Ipsum</h1>
                    <p className="text-gray-500 text-xl max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor elit sed laoreet cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <div className="m-8 flex justify-around max-w-md space-x-4">
                        <Link href="/products"><Button color="primary" className="px-10 py-4">Products</Button></Link>
                        <Link href="/contact"><Button color="outlined" className="px-10 py-4">Contact Us</Button></Link>
                    </div>
                </section>
                <section className="p-4">
                    <h2 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 mb-2 mx-auto">Best Sellers</h2>
                    <div className="grid grid-flow-rowgap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-start">
                        {bestSellers.slice(0, MAX_PRODUCTS).map(product => <div className="mx-auto my-4"><ProductPreview product={product} key={product.id} /></div>)}
                    </div>
                </section>
                <hr />
                <section className="p-4">
                    <h2 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 mb-2 mx-auto">Categories</h2>
                    <div className="grid grid-flow-rowgap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start px-4 py-8">
                        {Object.keys(productCategories).slice(0, MAX_CATEGORIES).map(category => (
                            <div key={category} className="flex flex-col items-center">
                                <h3 className="text-center text-2xl tracking-tight font-extrabold text-gray-900 mb-2 mx-auto">{category}</h3>
                                {productCategories[category].slice(0, MAX_PRODUCTS).map(product => <div className="mx-auto my-4"><ProductPreview product={product} key={product.id} /></div>)}
                            </div>
                        ))}
                    </div>
                </section>
                <section className="block">
                    <h2>Contact Us</h2>
                    <p>Number: +65 123 456</p>
                    <p>Email: Some email</p>
                </section>
                <button className="snipcart-checkout">Show cart</button>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const { products: bestSellers } = await getAllProducts()
    const productCategories = await getProductsByCategories()
    return { props: { bestSellers, productCategories } }
}