import React from 'react'
import FavSongEntries from './FavoriteSongEntries'

const FavSongList = (props) => {
    return (
        <div>
            {props.favSong.map(result => (
                <FavSongEntries 
                    results={result}
                    favSong={props.favSong}
                    setFavSong={props.setFavSong}
                />
                
            ))}
        </div>
    )
}

export default FavSongList;