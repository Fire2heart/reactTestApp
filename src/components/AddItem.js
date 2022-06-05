import React, { useRef } from 'react'
import {BsPlusLg} from 'react-icons/bs'

function AddItem({addItem, setAddItem, handleAdd}) {
    const inputRef = useRef();

  return (
    <form onSubmit={handleAdd}>
        <input 
            autoFocus
            ref={inputRef}
            className='option-input'
            type="text" 
            placeholder='Add item'
            required
            value={addItem}
            onChange={(e) => setAddItem(e.target.value)}
        />
        <button 
            onClick={() => inputRef.current.focus()}
            className='button-add'  
        >
            <BsPlusLg />
        </button>
    </form>
  )
}

export default AddItem