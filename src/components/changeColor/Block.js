import React from 'react'

const Block = ({color}) => {
  return (
    <div 
        className='block'
        style={{backgroundColor: color}}    
    >
        <p
            style={{color: color === 'black' || color === '#000' ? 'white' : 'black'}}
        >{color ? color : 'No color'}</p>
    </div>
  )
}

export default Block