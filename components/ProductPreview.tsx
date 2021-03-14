import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface IProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: string
}
interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    return (
        <div className="product">
            <h2 className="product__title"><Link href={`/products/${props.product.id}`}>{props.product.name}</Link></h2>
            <p className="product__description">{props.product.description}</p>
            <Image src={props.product.image} alt="" className="product__image" width="300" height="auto" />
            <div className="product__price-button-container">
                <button
                    className="snipcart-add-item"
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-price={props.product.price}
                    data-item-url={`/products/${props.product.id}`} // should be the current url 
                    data-item-image={props.product.image}>
                    Add to cart (${props.product.price.toFixed(2)})
                </button>
            </div>
        </div>
    )
}
export default Product
