import React from 'react'

const SearchDropDown = (props) => {

    const handleChange = (e) => {
        props.setSearchAttribute(e.target.value)
    }

    return ( 
        <div className="searchOptions">
            <label htmlFor="selectDropDown" id="dropDownLabel">Choose a search parameter : </label>
            <select onChange={handleChange} name="selectDropDown" id="selectDropDown">
                <option value="music">Music</option>
                <option value="movie">Movie</option>
                <option value="ebook">E-Book</option>
                <option value="musicVideo">Music Video</option>
            </select>
        </div>
    )
}

export default SearchDropDown;