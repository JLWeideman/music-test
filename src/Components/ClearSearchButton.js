import React from 'react'

const ClearSearchBtn = (props) => {

    const handleClick= () => {
        props.setSearchRes([])
        props.setSearchText('')
        props.setSearchAttribute('')
        document.getElementById('searchInput').value = ''
    }

    return (
        <div className="searchOptions">
            <button onClick={handleClick}>Clear Search</button>
        </div>
    )
}

export default ClearSearchBtn;