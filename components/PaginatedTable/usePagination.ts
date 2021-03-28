import { useState, useEffect, useRef, useMemo } from 'react'
import { useRouter } from 'next/router'

interface usePaginationProps<T extends any[]> {
    items: T,
    pageSize?: number,
    numberOfFrontPagesShown?: number,
    numberOfBackPagesShown?: number,
    numberOfMiddlePagesShown?: number
}

export default function usePagination<T extends any[]>({ items = [] as T, pageSize = 15, numberOfFrontPagesShown = 3, numberOfBackPagesShown = 3, numberOfMiddlePagesShown = 5 }: usePaginationProps<T>) {
    const [currentPage, setCurrentPage] = useState(0)
    const maxPage = Math.ceil(items.length / pageSize)
    const firstItemIndex = currentPage * pageSize
    const lastItemIndex = (currentPage + 1) * pageSize < items.length ? (currentPage + 1) * pageSize : items.length // max index should be at most length of items

    const currentItems = useMemo(() => {
        return items.slice(firstItemIndex, lastItemIndex)
    }, [items, currentPage])

    // everytime items change, go back to first page
    useEffect(() => {
        setCurrentPage(0)
    }, [items])

    const handlePageChange = (direction: number) => setCurrentPage(c => {
        let newPage = (c + direction) % maxPage
        if (newPage < 0) {
            newPage = newPage + maxPage
        }
        return newPage
    })

    // show the first n pages, the last n pages, and [a, b] such that a < currentPage < b and b - a = n
    // hidden pages are replaced by a single ... 
    // e.g. [1, 2, 3, ..., 100, 101, 102, 103, 104, 105, ..., 998, 999, 1000]
    const pageNumbers = [...Array(maxPage).keys()].map(number => {
        if (number < numberOfFrontPagesShown || number > maxPage - numberOfBackPagesShown - 1 || Math.abs(currentPage - number) < numberOfMiddlePagesShown / 2) {
            return number
        }

        return null
    }).reduce((acc, currentElement) => {
        const previousElement = acc[acc.length - 1]
        if (previousElement !== currentElement) {
            acc.push(currentElement)
        }

        return acc
    }, [] as number[])

    return {
        currentPage: currentPage + 1,
        lastPage: maxPage,
        firstItemShown: firstItemIndex + 1,
        lastItemShown: lastItemIndex,
        currentItems,
        goToNextPage: () => handlePageChange(1),
        goToPreviousPage: () => handlePageChange(-1),
        goToPage: (page: number) => setCurrentPage(page - 1),
        pageNumbers: pageNumbers.map(c => c == null ? c : c + 1),
    }
}