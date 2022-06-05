import React from "react";

export default function Counter({step, counter, setCounter}){
    const inc = () => {
    setCounter(x => x+step);
  };

    const dec = () => {
      return setCounter(x => (x-step)<=0 ? 0 : x-step )
  };
 
    return(
        <div className='counter'>
            <button className='button' onClick={dec}>-</button>
            <div>{counter}</div>
            <button className='button' onClick={inc}>+</button>
        </div>
    )
}