import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../utils'
import Button from './Button'

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    return (
        <div className="product max-w-xs flex flex-col items-center">
            <h2 className="product__title text-xl font-medium hover:underline"><Link href={`/products/${props.product.id.toString()}`}><a>{props.product.name}</a></Link></h2>
            <img src={props.product.image} alt="" className="product__image mx-auto my-4"/>
            <p className="product__description text-gray-500 tracking-wide">{props.product.description}</p>
            <div className="product__price-button-container p-4 mx-auto">
                <Button
                    color="secondary"
                    className="snipcart-add-item"
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-price={props.product.price}
                    data-item-url={`/products/${props.product.id}`} // should be the current url 
                    data-item-image={props.product.image}>
                    Add to cart (${props.product.price.toFixed(2)})
                </Button>
            </div>
        </div>
    )
}
export default Product
