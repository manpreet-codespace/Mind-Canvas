import React, { useState } from 'react'
import { Bell, User } from 'lucide-react'

const Navbar = () => {
    // const [isNotification,setIsNotification]=useState(false);

  return (
    <>
        <nav className='flex justify-between py-4 px-6 border-b border-gray-300 items-center bg-white/80'>
            {/* <div className='font-heading text-2xl flex gap-2 items-center'>
                <span className='bg-black p-1 text-xl rounded-lg text-white inline font-sans '>M</span>
                MindCanvas
            </div> */}
            <div>
                <input type="search" placeholder='Search...' className='border border-gray-300 p-2 font-body text-sm rounded-full ' />
            </div>
            <div className=' flex gap-6 justify-between items-center font-semibold text-[hsl(var(--muted-foreground))]'>
                <button className='pointer'><Bell /></button>
                <button><User/></button>
                
            </div>
        </nav>
        
    </>
  )
}

export default Navbar