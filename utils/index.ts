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

async function getAllProducts({ limit = 15, page = 1 } = {}) {
    if (limit < 0) {
        return {
            data: products,
            metadata: {
                firstItemIndex: 1,
                lastItemIndex: products.length,
                firstPage: 1,
                lastPage: 1,
                totalCount: products.length
            }
        }
    }

    const totalCount = products.length
    let firstItemIndex = (page - 1) * limit
    let lastItemIndex = page * limit > totalCount ? totalCount : page * limit
    const data = products.slice(firstItemIndex, lastItemIndex)

    if (data.length == 0) {
        firstItemIndex = 0
        lastItemIndex = 0
    }

    await sleep(1000)

    return {
        data,
        metadata: {
            firstItemIndex: firstItemIndex,
            lastItemIndex,
            firstPage: 1,
            currentPage: page,
            lastPage: Math.floor(totalCount / limit) + 1,
            totalCount,
            limit,
        }
    }
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