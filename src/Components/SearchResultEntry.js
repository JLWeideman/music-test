import React from 'react'

const SearchResEntries = (props) => {

    const handleClick = () => {
        props.setFavSong([...props.favSong, {id: Math.floor(Math.random() * Date.now()),
            trackName: props.results.trackName,
            albumName: props.results.albumName,
            artistName: props.results.artistName}])
    }

    return(
        <div key={props.number}>
            <p>{props.results.trackName}</p>
            <p>{props.results.albumName}</p>
            <p>{props.results.artistName}</p>
            <button onClick={handleClick}>Add to favorites</button>
            <hr />
        </div>
    )
}

export default SearchResEntries;