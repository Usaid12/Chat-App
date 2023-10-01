import React from 'react'
import onlineIcon from "../assests/onlineIcon.png"
import closeIcon from "../assests/closeIcon.png"

const InfoBar = ({room}) => {
  return (
    <div className=' flex items-center justify-between bg-[#2979ff]  h-fit w-full '>
      <div className=' flex-[0.5] flex items-center ml-[5%] text-white'>
        <img src={onlineIcon} alt='' className='mr-[5%]'/>
        <h3 className='font-semibold text-lg  py-2 capitalize'>{room}</h3>
        </div>
        <div className='rightinner flex flex-[0.5] justify-end mr-[5%]'>
      <a href='/'><img src={closeIcon} alt=''/></a>
     
      </div>
    </div>
  )
}

export default InfoBar
