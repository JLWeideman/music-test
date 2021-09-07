import React from 'react'

const FavSongEntries = (props) => {

    const handleClick = () => {
        props.setFavSong(props.favSong.filter(ell => ell.id !== props.results.id))
    }

    return(
        <div key={props.number}>
            <p>{props.results.trackName}</p>
            <p>{props.results.albumName}</p>
            <p>{props.results.artistName}</p>
            <button onClick={handleClick}>Remove from favorites</button>
            <hr />
        </div>
    )
}

export default FavSongEntries;