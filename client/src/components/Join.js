import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react'

const Join = () => {
  const [name,setName]=useState("")
  const [room,setRoom]=useState("")


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-gray-600 to-black">
    <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-[400px] h-[400px]">
      <h1 className='text-2xl text-center py-4 font-semibold'>Welcome to Chat Room</h1>
      <div className="mb-4 py-2">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="room">
          Room
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="room"
          type="text"
          placeholder="Enter the room number"
          value={room}
          onChange={e=>setRoom(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
      <Link to={`/chat?name=${name}&room=${room}`} onClick={e=>(!name || !room)?e.preventDefault():null}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
        </Link>
      </div>
    </form>
  </div>
  
  )
}

export default Join
