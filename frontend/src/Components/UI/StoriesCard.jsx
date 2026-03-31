import React from 'react'

const StoriesCard = () => {
  return (
    <>
        <div className='bg-white border border-gray-300 p-4 rounded-xl'>
            <h3 className='font-body text-[hsl(var(--accent))] font-semibold'>Culture</h3>
            <h1 className='text-2xl font-heading'>
                The Quiet Revolution of Neighborhood Bookshops
            </h1>
            <p className='line-clamp-2 font-body text-[hsl(var(--muted-foreground))] py-3'>How independent bookstores are reinventing themselves as cultural hubs, one reading group at a time.</p>

            <div className='flex items-center gap-2 text-sm'>
                <span className='bg-black text-white rounded-full  text-sm p-1'>CM</span>
                <p className='text-[hsl(var(--muted-foreground))]'>Clara Monterio</p>
                <p className='text-[hsl(var(--muted-foreground))]'>15,Mar 2023</p>
                <p className='text-[hsl(var(--muted-foreground))]'>8 min read</p>
            </div>
        </div>
    </>
  )
}

export default StoriesCard