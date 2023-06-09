import React from "react";


const Searchbar = ({input:searchInput, onChange:setSearchInput}) => {

    return (
            <input
            className="block w-72 p-4 mx-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-red-600 focus:border-red-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600"
            type="text"
            placeholder="Search cards"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput} />

    )
}

export default Searchbar;