import React from 'react'
import { getAllProducts, getProduct } from '../../utils'
import Link from 'next/link'
import { IProduct } from '../../utils'
import Layout from '../../components/Layout'
import Button from '../../components/Button'

interface ProductPageProps {
    product: IProduct
}

export default function ProductPage(props: ProductPageProps) {
    return (
        <Layout title={props.product.name}>
            <div className="p-8">
                <div className="flex flex-col md:flex-row justify-center items-start">
                    <div>
                        <img src={props.product.image} alt="" className="product__image" />
                    </div>
                    <div className="px-8">
                        <h2 className="product__title text-center text-4xl font-bold mb-8">{props.product.name}</h2>
                        <p className="product__description text-lg font-semibold text-gray-600 mb-4">{props.product.description}</p>
                        <div className="product__price-button-container">
                            <Button color="primary"
                                className="snipcart-add-item p-4"
                                data-item-id={props.product.id}
                                data-item-name={props.product.name}
                                data-item-price={props.product.price}
                                data-item-url={`/products/${props.product.id}`}
                                data-item-image={props.product.image}>
                                Add to cart (${props.product.price.toFixed(2)})
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const { products } = await getAllProducts()
    const paths = products.map(product => `/products/${product.id.toString()}`)

    return {
        paths, fallback: false
    }
}

export async function getStaticProps({ params }) {
    const product = await getProduct(params.id)

    return {
        props: {
            product
        }
    }
}


