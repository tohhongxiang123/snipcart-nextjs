import React, { useEffect, useMemo, useRef, useState } from 'react'

interface PaginatedTableProps {
    children: React.ReactNodeArray,
    pageSize?: number
}

export default function PaginatedTable({ children = [], pageSize = 15 }: PaginatedTableProps) {
    const [currentPage, setCurrentPage] = useState(0)
    const maxPage = Math.ceil(children.length / pageSize)

    const currentItems = useMemo(() => {
        return children.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    }, [children, currentPage])

    useEffect(() => {
        setCurrentPage(0)
    }, [children])

    const ref = useRef<HTMLDivElement>(null)
    const handlePageChange = (direction: number) => setCurrentPage(c => {
        if (ref.current) {
            ref.current.scrollIntoView(false)
        }

        let newPage = (c + direction) % maxPage
        if (newPage < 0) {
            return newPage + maxPage
        }

        return newPage
    })
    return (
        <div>
            <div ref={ref} />
            <div className="grid grid-flow-rowgap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-start">
                {currentItems}
            </div>
            <div className="flex justify-end items-center space-x-4">
                <h4>Page <strong>{currentPage + 1}/{maxPage}</strong></h4>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button onClick={() => handlePageChange(-1)} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button onClick={() => handlePageChange(1)} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </nav>
            </div>
        </div>
    )
}
