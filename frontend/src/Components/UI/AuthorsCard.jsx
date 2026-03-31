import React from 'react'

const AuthorsCard = () => {
    return (
        <>
            <article className='w-full max-w-md rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm flex gap-4 '>
                <span className='flex h-10 items-center  px-2 rounded-full bg-black text-sm font-semibold text-white'>CM</span>
                <div>

                    <div className='flex items-center gap-4'>
                        <div>
                            <p className='font-medium text-lg text-[hsl(var(--foreground))]'>Clara Monterio</p>
                            {/* <p className='text-sm text-[hsl(var(--muted-foreground))]'>Writes on culture and community</ */}
                        </div>
                    </div>

                    <div className='mt-1 flex flex-col gap-2'>
                        <h3 className='font-body text-xs font-semibold uppercase text-[hsl(var(--accent))]'>Culture</h3>
                        <p className='line-clamp-2 font-body text-sm leading-6 text-[hsl(var(--muted-foreground))]'>
                            How independent bookstores are reinventing themselves as cultural hubs, one reading group at a time.
                        </p>
                    </div>

                    <div className='mt-2 flex flex-wrap items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]'>
                        <p>24 stories</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default AuthorsCard
