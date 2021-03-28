import React from 'react'
import { IProduct } from '../utils'
import Button, { ButtonProps } from './Button'

interface ProductButtonProps extends ButtonProps {
    product: IProduct
}

export default function ProductButton(props: ProductButtonProps) {
    return (
        <Button {...props}
            data-item-id={props.product.id}
            data-item-name={props.product.name}
            data-item-price={props.product.price}
            data-item-url={`/products/${props.product.id}`}
            data-item-image={props.product.image}
            className={`${props.className} snipcart-add-item`}
        />
    )
}
