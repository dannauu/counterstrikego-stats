import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
    function searchButton() {
        console.log('YEs')
    }
    return (
        <div className='d-flex justify-content-center mt-5'>
            <input placeholder='Enter Steam ID here...' className='input'></input>
            <button className='searchBtn' onClick={searchButton}>Search Stats</button>
        </div>
    )
}

export default SearchBar
