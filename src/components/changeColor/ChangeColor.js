import React from 'react'
import Block from './Block'
import InputBlock from './InputBlock'
import './changeColor.css'

const ChangeColor = () => {
    const [color, setColor] = React.useState('')

  return (
    <section className='change-color'>
        <Block 
            color={color}
        />
        <InputBlock 
            color={color}
            setColor={setColor}
        />
    </section>
  )
}

export default ChangeColor