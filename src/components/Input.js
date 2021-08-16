import React, {useState} from 'react'
import './input.css'

const Input = () => {
    const[input, setInput] = useState('')
    return (
        <div className='input'>
            <input type='text' value={input} onChange={e=>setInput(e.target.value)}></input>
            <button onClick={input}> ADD </button>
            
        </div>
    )
}

export default Input

