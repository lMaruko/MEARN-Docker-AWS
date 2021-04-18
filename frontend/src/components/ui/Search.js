import React from 'react'

const Search = () => {
    return (
        <div className="mx-2 mt-2 sm:ml-4 flex bg-gray-100 p-1 rounded-md border border-gray-400 shadow-sm w-full sm:w-2/6 hover:shadow-lg transition ease-in-out duration-300">
            <span><svg viewBox="0 0 20 20" fill="currentColor" className="w-6 mr-2 text-gray-600"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg></span>
            <input type="text" name="serach" placeholder="Buscar..." className="bg-gray-100 text-sm text-gray-700 focus:outline-none placeholder-gray-500 w-full"/>
        </div>
    )
}

export default Search
