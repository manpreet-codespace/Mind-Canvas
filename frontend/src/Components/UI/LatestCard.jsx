import React from 'react'

const LatestCard = () => {
  return (
    <>
         <div className='bg-white p-4 rounded-xl'>
            <div className='flex gap-2'> 
                <span className='bg-black text-white rounded-full  text-sm p-1'>CM</span>
                <p className='text-[hsl(var(--muted-foreground))]'>Clara Monterio</p>
            </div>
            {/* <h3 className='font-body text-[hsl(var(--accent))] font-semibold'>Culture</h3> */}
            <h1 className='text-xl font-heading'>
                The Quiet Revolution of Neighborhood Bookshops
            </h1>
            <p className='line-clamp-2 font-body text-sm text-[hsl(var(--muted-foreground))] py-3'>How independent bookstores are reinventing themselves as cultural hubs, one reading group at a time.</p>

            <div className='flex items-center gap-2 text-sm'>
                <p className='text-[hsl(var(--muted-foreground))]'>15,Mar 2023</p>
                <p className='text-[hsl(var(--muted-foreground))]'>8 min read</p>
                <p className='font-body text-[hsl(var(--muted-foreground))] px-2 text-sm  bg-[hsl(var(--muted))] rounded-full'>Culture</p>
            </div>
        </div>
    </>
  )
}

export default LatestCard