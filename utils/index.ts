import fs from 'fs';

export interface IProduct {
    id: string
    name: string
    price: number
    description: string
    image?: string,
    category: string
}

const rawData = fs.readFileSync('./utils/products.json')
const { products }: { products: IProduct[] } = JSON.parse(rawData as any)

async function sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function getAllProducts() {
    await sleep(1000)
    return { products }
}

async function getProduct(id: IProduct['id']) {
    await sleep(1000)
    return products.find(product => id.toString() === product.id.toString())
}

async function getProductsByCategories() {
    await sleep(1000)
    const productCategoryDict = {}
    for (const product of products) {
        if (product.category in productCategoryDict) {
            productCategoryDict[product.category].push(product)
        } else {
            productCategoryDict[product.category] = [product]
        }
    }
    
    return productCategoryDict
}

export {
    getProduct, getAllProducts, getProductsByCategories
}