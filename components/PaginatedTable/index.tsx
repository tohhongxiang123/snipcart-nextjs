import React, { useEffect, useMemo, useRef, useState } from 'react'
import usePagination from './usePagination'

interface PaginatedTableProps {
    children: React.ReactNodeArray,
    pageSize?: number
}

export default function PaginatedTable({ children = [] }: PaginatedTableProps) {
    const { currentPage, lastPage, firstItemShown, lastItemShown, currentItems, goToPreviousPage, goToNextPage, goToPage, pageNumbers } = usePagination({ items: children })
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView(false)
        }
    }, [currentPage])

    return (
        <div>
            <div ref={ref} />
            {currentItems.length > 0 ? (
                <div className="grid grid-flow-rowgap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-start">
                    {currentItems}
                </div>
            ) : (
                <div>
                    <p className="text-center font-semibold text-gray-400 text-lg"><i>No items found...</i></p>
                </div>
            )}

            <div className="flex flex-wrap justify-end items-center space-x-4">
                <p className="my-4">Page <strong>{currentPage}/{lastPage}</strong>, Items <strong>{firstItemShown} - {lastItemShown}</strong> of {children.length}</p>
                <nav className="relative z-0 inline-flex flex-wrap rounded-md shadow-sm -space-x-px mx-auto" aria-label="Pagination">
                    <button onClick={goToPreviousPage} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
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
                            key={number}
                            onClick={() => goToPage(number)}
                            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 ${currentPage === number ? "bg-gray-200" : "bg-white"} text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none`}
                        >
                            {number}
                        </button>
                    ))}
                    <button onClick={goToNextPage} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0  20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </nav>
            </div>
        </div >
    )
}0
