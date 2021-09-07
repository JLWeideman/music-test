import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SearchInput from './SearchInput'
import SearchBtn from './SearchBtn'
import SearchResults from './SearchResults'
import FavoriteList from './FavoriteSongList'
import SearchDropDown from './SearchDropDown'
import ClearSearch from './ClearSearchButton'

const MainForm = () => {

    const [searchText, setSearchText] = useState('')
    const [searchAttribute, setSearchAttribute] = useState('')
    const [searchRes, setSearchRes] = useState([])
    const [favSong, setFavSong] = useState([])

    return (
        <div>
            <Container>
                <Row>
                    <Col id="header">
                        <h1>My Favorites</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id="searchCol">
                        <SearchDropDown 
                            searchAttribute={searchAttribute}
                            setSearchAttribute={setSearchAttribute}
                        />

                        <SearchInput 
                            searchText={searchText}
                            setSearchText={setSearchText} 
                        />
                        <SearchBtn                 
                            searchText={searchText}
                            setSearchText={setSearchText}
                            searchRes={searchRes}
                            setSearchRes={setSearchRes}
                            searchAttribute={searchAttribute}
                            setSearchAttribute={setSearchAttribute}
                        />
                        <ClearSearch 
                            setSearchText={setSearchText}
                            setSearchRes={setSearchRes}
                            setSearchAttribute={setSearchAttribute}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <h3><u>Search Results</u></h3>
                        <SearchResults 
                            searchRes={searchRes}
                            setSearchRes={setSearchRes}
                            favSong={favSong}
                            setFavSong={setFavSong}
                        />
                    </Col>
                    <Col sm={6}>
                        <h3><u>Favorites List</u></h3>
                        <FavoriteList 
                            favSong={favSong}
                            setFavSong={setFavSong}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainForm;