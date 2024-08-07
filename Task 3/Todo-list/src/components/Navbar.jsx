import React from 'react'
import "./Navbar.css"
export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-2'>
           <div className="logo">
               <span className='font-bold text-xl mx-8'>#Tasks</span>
               </div>
            <ul className='flex gap-8 mx-8'>
                <li className='cursor-pointer hover:font-bold transition-all duration-200' >Home</li>
                <li className='cursor-pointer hover:font-bold transition-all duration-200'>Your Task</li>
            </ul>
       
    </nav>
  )
}




export default Navbar 