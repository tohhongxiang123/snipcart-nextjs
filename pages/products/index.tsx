import React, { useState } from 'react'
import Layout from '../../components/Layout'
import ProductPreview from '../../components/ProductPreview'
import TextInput from '../../components/TextInput'
import { getAllProducts, IProduct } from '../../utils'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

interface IndexProps {
    products: IProduct[]
}

export default function Index({ products = [] }: IndexProps) {
    const router = useRouter()

    const [text, setText] = useState('')

    const currentPage = parseInt(router.query.page as string ?? "1")
    const handlePagination = (direction: number) => {
        router.push({
            query: {
                page: currentPage + direction
            }
        })
    }

    const limit = 15
    const totalCount = products.length
    let firstItemIndex = (currentPage - 1) * limit
    let lastItemIndex = currentPage * limit > totalCount ? totalCount : currentPage * limit
    const filteredProducts = products.slice(firstItemIndex, lastItemIndex)
    const lastPage = Math.floor(totalCount / limit) + 1

    if (filteredProducts.length == 0) {
        firstItemIndex = 0
        lastItemIndex = 0
    }

    // show the first n pages, the last n pages, and [a, b] such that a < currentPage < b and b - a = n
    // hidden pages are replaced by a single ... 
    // e.g. [1, 2, 3, ..., 100, 101, 102, 103, 104, 105, ..., 998, 999, 1000]
    const numberOfFrontPagesShown = 3
    const numberOfBackPagesShown = 3
    const numberOfMiddlePagesShown = 5
    const pageNumbers = [...Array(lastPage).keys()].map(number => {
        if (number < numberOfFrontPagesShown || number > lastPage - numberOfBackPagesShown - 1 || Math.abs(currentPage - number) < numberOfMiddlePagesShown / 2) {
            return number
        }

        return null
    }).reduce((acc, currentElement) => {
        const previousElement = acc[acc.length - 1]
        if (previousElement !== currentElement) {
            acc.push(currentElement)
        }
        return acc
    }, [] as (number|null)[]).map(numbers => numbers != null ? numbers + 1 : null)

    return (
        <Layout title="All Products">
            <section className="p-4">
                <div className="p-4 flex flex-col justify-center items-center">
                    <TextInput label="Search" onChange={e => setText(e.target.value)} value={text} />
                </div>
                <div>
                    <h2 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 mb-2 mx-auto">All Products</h2>
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-flow-rowgap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-start">
                            {filteredProducts.map(product => <div className="mx-auto my-4" key={product.id}><ProductPreview product={product} key={product.id} /></div>)}
                        </div>
                    ) : (
                        <p className="text-xl text-bold text-gray-500 text-center"><i>No items found...</i></p>
                    )}
                    <div className="flex flex-wrap justify-end items-center space-x-4">
                        <p className="my-4">Page <strong>{currentPage}/{lastPage}</strong>, Items <strong>{firstItemIndex + 1} - {lastItemIndex}</strong> of {totalCount}</p>
                        <nav className="relative z-0 inline-flex flex-wrap rounded-md shadow-sm -space-x-px mx-auto" aria-label="Pagination">
                            {currentPage <= 1 || <button onClick={() => handlePagination(-1)} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span className="sr-only">Previous</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>}
                            {pageNumbers.map((number, index) => number === null ? (
                                <button
                                    disabled
                                    key={index}
                                    className={`pointer-events-none relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 focus:outline-none`}
                                >
                                    ...
                                </button>
                            ) : (
                                <button
                                    key={index}
                                    onClick={() => router.push({ query: { page: number } })}
                                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 ${currentPage === number ? "bg-gray-200" : "bg-white"} text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none`}
                                >
                                    {number}
                                </button>
                            ))}
                            {currentPage >= lastPage || <button onClick={() => handlePagination(1)} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>}
                        </nav>
                    </div>
                </div>
            </section>
            <div id="snipcart" data-config-modal-style="side" data-api-key="M2JkMTNmYTUtYTljMC00OTI0LTk2ZGEtMGNiMTcwNmM3ZmY0NjM3NTEyOTc3NjgwNTcxNjg0" />
        </Layout>
    )
}

export async function getStaticProps(ctx: GetStaticProps<{ products: IProduct[] }>) {
    const { data } = await getAllProducts()
    return { props: { products: data } }
}
