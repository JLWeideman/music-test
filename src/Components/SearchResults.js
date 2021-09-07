import React from 'react'
import ResultEntries from './SearchResultEntry'

const SearchResults = (props) => {
    return (
        <div>
            {props.searchRes.map((result, index) => (
                <ResultEntries 
                    results={result}
                    favSong={props.favSong}
                    setFavSong={props.setFavSong}
                />
            ))}
        </div>
    )
}

export default SearchResults;