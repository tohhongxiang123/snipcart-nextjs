import { IProduct } from '../components/ProductPreview'

async function sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const products: IProduct[] = [{
    id: '1',
    name: 'TestProduct',
    price: 25,
    url: 'test',
    description: 'test description',
    image: '/gourami.jpg',
}, {
    id: '2',
    name: 'TestProduct2',
    price: 250,
    url: 'test',
    description: 'test description 2',
    image: '/guppy.jpg',
}, {
    id: '3',
    name: 'TestProduct3',
    price: 2500,
    url: 'test',
    description: 'test description 3',
    image: '/betta.webp',
}]

async function getAllProducts() {
    await sleep(1000)
    return { products }
}

async function getProduct(id: IProduct['id']) {
    await sleep(1000)
    return products.find(product => id === product.id)
}

export {
    getProduct, getAllProducts
}