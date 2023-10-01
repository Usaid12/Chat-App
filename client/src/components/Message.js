import React from 'react'
import "./Message.css"
import ReactEmoji from "react-emoji"
const Message = ({message:{user,text},name}) => {
    let isSentByCurrentUser=false
    const trimName=name.trim().toLowerCase()
    if(user===trimName){
        isSentByCurrentUser=true
    }

  return (
   isSentByCurrentUser?(
<div className='messageContainer justify-end'>
    <p className='sentText pr-2 font-medium'>{trimName}</p>
    <div className='messageBox  bg-[#2979FF] '>
        <p className='messageText '>{ReactEmoji.emojify(text)}</p>
    </div>

</div>
   ):(
    <div className='messageContainer justify-start'>
    <div className='messageBox bg-[#F3F3F3] w-full'>
    <p className='sentText text-black '>{ReactEmoji.emojify(text)}</p>
    </div>
        <p className='messageText  pl-2 pt-4 '>{user}</p>

</div> 

   )
  )
}

export default Message
