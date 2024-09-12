import React from 'react'
import { MdAccountCircle } from "react-icons/md";

function Navbar () {
  return (
    <>
    <div className="bg-black">
        <ul className=''>
            <li className='text-red-600'>
                Home
            </li>
            <li>
            <MdAccountCircle />
            </li>
        </ul>
    </div>
    
    </>
  )
}

export default Navbar