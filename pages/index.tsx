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
        <Layout title="Singapore Furniture">
            <div>
                <section className="text-center px-8 py-16 flex flex-col items-center">
                    <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 mb-4">Singapore Furniture</h1>
                    <p className="text-gray-500 text-xl max-w-lg">Singapore Furniture focuses on providing all of our customers with quality services and best workspaces available, whether it's for a home office or relocation of a multi-national company</p>
                    <div className="m-8 flex flex-col sm:flex-row justify-center sm:justify-around items-center max-w-md space-x-0 sm:space-x-4">
                        <Link href="/products"><Button color="primary" className="px-10 py-4 mx-auto mb-4">Products</Button></Link>
                        <Link href="/contact"><Button color="outlined" className="px-10 py-4 mx-auto mb-4">Contact Us</Button></Link>
                    </div>
                </section>
                <section className="text-center px-8 py-32 flex flex-col items-center bg-gray-200">
                    <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 mb-4">Who Are We?</h1>
                    <p className="text-gray-500 text-xl max-w-lg mb-8">We are a team of friendly and responsive people that delivers personalised and quality services. We can offer advice on workspace safety and health, lighting, data/voice cabling and more.</p>
                    <p className="text-gray-500 text-xl max-w-lg">Our professional team also offers additional value in terms of space design and planning services</p>
                </section>
                <section className="text-center px-8 py-32 flex flex-col items-center">
                    <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 mb-4">Why Choose Us?</h1>
                    <p className="text-gray-500 text-xl max-w-lg mb-8">With over 50 years of business experience, our product is extensive and comprehensive and suits every budget and office space</p>
                    <p className="text-gray-500 text-xl max-w-lg">We provide well-designed, functional and durable furniture that will create a more inspiring and efficient workspace</p>
                </section>
                <section className="p-16 bg-gray-200">
                    <h2 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 mb-2 mx-auto">Best Sellers</h2>
                    <div className="grid grid-flow-rowgap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-start">
                        {bestSellers.slice(0, MAX_PRODUCTS).map(product => <div className="mx-auto my-4" key={product.id}><ProductPreview product={product} key={product.id} /></div>)}
                    </div>
                </section>
                <hr />
                <section className="p-16">
                    <h2 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 mb-2 mx-auto">Categories</h2>
                    <div className="grid grid-flow-rowgap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start px-4 py-8">
                        {Object.keys(productCategories).slice(0, MAX_CATEGORIES).map(category => (
                            <div key={category} className="flex flex-col items-center">
                                <h3 className="text-center text-2xl tracking-tight font-extrabold text-gray-900 mb-2 mx-auto">{category}</h3>
                                {productCategories[category].slice(0, MAX_PRODUCTS).map(product => <div className="mx-auto my-4" key={product.id}><ProductPreview product={product} key={product.id} /></div>)}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const { data: bestSellers } = await getAllProducts()
    const productCategories = await getProductsByCategories()
    return { props: { bestSellers, productCategories } }
}