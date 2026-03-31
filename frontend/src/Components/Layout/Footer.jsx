import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className='mt-16 flex w-full items-start justify-between border-t border-b border-gray-300 bg-white/80 px-6 py-6'>
            <div className='max-w-sm'>
                <h2 className='font-heading text-2xl'>MindCanvas</h2>
                <p className='mt-2 text-sm text-[hsl(var(--muted-foreground))]'>A calm space for curious minds to read and write.</p>
            </div>
            <div className='flex items-center gap-6 font-semibold text-[hsl(var(--muted-foreground))]'>
                <Link to="/">Stories</Link>
                <Link to="/">Authors</Link>
                <Link to="/">Write</Link>
            </div>
        </footer>
        <footer>
            <p className='text-[hsl(var(--muted-foreground))] p-10 text-xs'>© 2026 MindCanvas</p>
        </footer>
    </>
  )
}

export default Footer
