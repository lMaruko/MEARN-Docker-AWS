import React from 'react'

const Pagination = () => {
    return (
        <div className="self-center m-2 flex justify-center">
            <button className="bg-gray-200 px-1  py-2 rounded-sm border border-gray-300 shadow-md transform hover:scale-105 transition-all ease-out duration-150 sm:px-2 sm:py-4 m-1">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 text-gray-500"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
            </button>
            <button className="pagination-active sm:w-10 sm:px-2 sm:py-4 hover:scale-105 m-1">1</button>
            <button className="pagination sm:w-10 hover:scale-105 sm:px-2 sm:py-4 m-1">2</button>
            <span className="flex justify-center items-center pagination sm:w-10 hover:scale-105 cursor-pointer m-1">...</span>
            <button className="pagination sm:w-10 hover:scale-105 sm:px-2 sm:py-4 m-1">24</button>
            <button className="pagination sm:w-10 hover:scale-105 sm:px-2 sm:py-4 m-1">25</button>
            <button className="bg-gray-200 px-1 py-2 rounded-sm border border-gray-300 shadow-md transform hover:scale-105 transition-all ease-out duration-150 sm:px-2 sm:py-4 m-1">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 text-gray-500"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    )
}

export default Pagination
