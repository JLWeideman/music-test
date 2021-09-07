import React from 'react'

const SearchInput = (props) => {

    const handleChange = (e) => {
        props.setSearchText(e.target.value);
    }

    return (
        <div className="searchOptions">
            <input id="searchInput" type='text' onChange={handleChange}  />
        </div>
    )
}

export default SearchInput