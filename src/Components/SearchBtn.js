import React from 'react'

const SearchBtn = (props) => {

    const handleClick = () => {
        const searchTerm = props.searchText;
        const searchEntity = props.searchAttribute;

        const requestOption = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({text: searchTerm,
                                    entity: searchEntity})
        };
        fetch('/api', requestOption)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                props.setSearchRes(result);
            },
            console.error()
        )
    }

    return (
        <div className="searchOptions">
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default SearchBtn;