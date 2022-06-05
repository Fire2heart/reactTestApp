import React from 'react'

function SearchItem({search, setSearch}) {
  return (
    <form className='search'>
        <input 
            className='option-input'
            type="text" 
            placeholder='Search item'
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem