import React, { useState } from 'react'

export default function Header() {


const [isOpen , setIsOpen] =useState(false)

const handleOpen = () => {
  setIsOpen(true)
}
const handleClose = ()=>{
  setIsOpen(false)
}

  return ( <div className='bg-bl'>

 
    
    <div className='bg-yellow-400 flex  justify-between p-6 text-black'>
      <h1 className='text-black text-2xl text-center font-semibold py-5'>Code Xalka</h1>
      <i style={{display: isOpen == true? "none" : ""}}      onClick={handleOpen} class="fa-solid fa-bars text-5xl sm:hidden text-black"></i>
      <i onClick={handleClose} style={{display: isOpen == true ? "block" : " none"}}   class="fa-solid fa-x  text-black"></i>
      <ul className='hidden sm:flex gap-16 text-3xl'>
        <li>Home </li>
        <li>About us</li>
        <li>Contact Us</li>
      
      </ul>
    </div>


    <ul style={{display: isOpen ==true ? "flex" : "" }}     className=' hidden bg-white text-black flex-col space-y-5 p-2  text-3xl'>
        <li>Home </li>
        <li>About</li>
        <li>Service</li>
      
      </ul>


    </div>

  )
}
