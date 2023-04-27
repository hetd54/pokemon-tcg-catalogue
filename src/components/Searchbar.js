import React from "react";


const Searchbar = ({searchInput, setSearchInput}) => {

    return (
        <input
        type="text"
        placeholder="Search here"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput} />
    )
}

export default Searchbar;