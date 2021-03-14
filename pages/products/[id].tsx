import React from 'react'
import { getAllProducts, getProduct } from '../../utils'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../../components/ProductPreview'

interface ProductPageProps {
    product: IProduct
}

export default function ProductPage(props: ProductPageProps) {
    return (
        <div className="product">
            <h2 className="product__title">{props.product.name}</h2>
            <p className="product__description">{props.product.description}</p>
            <Image src={props.product.image} alt="" className="product__image" width="300" height="auto" />
            <div className="product__price-button-container">
                <button
                    className="snipcart-add-item"
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-price={props.product.price}
                    data-item-url={`/products/${props.product.id}`}
                    data-item-image={props.product.image}>
                    Add to cart (${props.product.price.toFixed(2)})
                </button>
            </div>
            <Link href="/products"><button>Back</button></Link>
        </div>
    )
}

export async function getStaticPaths() {
    const { products } = await getAllProducts()
    const paths = products.map(product => `/products/${product.id}`)

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


