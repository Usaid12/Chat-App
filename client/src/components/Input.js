import React from 'react'
import "./input.css"

const Input = ({message,setMessage,sendMessage}) => {
  return (
    <form className='form'>
        <input className='input' placeholder='  Type a message...' type='text' value={message} onChange={(e)=>setMessage(e.target.value)} onKeyDown={e=>e.key==="Enter"?sendMessage(e):null}/>
       <button type='submit' className='sendButton' onClick={(e)=>sendMessage(e)}>Send</button>
      </form>
  )
}

export default Input
