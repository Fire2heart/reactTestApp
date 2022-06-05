import React from 'react'

const inputBlock = ({color, setColor}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input 
        className='input-color'
        type="text" 
        autoFocus
        placeholder='Write a color'
        value={color}
        required
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  )
}

export default inputBlock