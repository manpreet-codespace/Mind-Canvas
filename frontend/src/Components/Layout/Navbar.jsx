import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between w-full py-4 px-6 border-b border-gray-300 items-center bg-white/80'>
            <div className='font-heading text-2xl flex gap-2 items-center'>
                <span className='bg-black p-1 text-xl rounded-lg text-white inline font-sans '>M</span>
                MindCanvas
            </div>
            <div className='w-2/12 flex justify-between items-center font-semibold text-[hsl(var(--muted-foreground))]'>
                <Link>Stories</Link>
                <Link>Authors</Link>
                <Link to="/signin" className='bg-black text-white rounded-full py-1 px-4'>Signin</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar