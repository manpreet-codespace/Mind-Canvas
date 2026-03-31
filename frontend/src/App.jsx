import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar.jsx';
import {ArrowRight} from 'lucide-react';
import StoriesCard from './Components/UI/StoriesCard.jsx';
import LatestCard from './Components/UI/LatestCard.jsx';
import AuthorsCard from './Components/UI/AuthorsCard.jsx';
import Footer from './Components/Layout/Footer.jsx';


const App = () => {

  const navigate= useNavigate();

  const handleSignup= ()=>{
    navigate("/signup");
  }
  return (
    <>
      <Navbar/>
      <section className='px-14 py-20'>
        <div className='w-5/12'>
          <h1 className='text-7xl font-heading '>
            Where ideas <br/>find their <span className='text-[hsl(var(--accent))] italic'>canvas</span>
          </h1>
          <p className='text-[hsl(var(--muted-foreground))] text-lg py-4'>A calm space for curious minds — read thoughtful essays on culture, design, sustainability, and the ideas that matter.</p>

          <div className='flex gap-6'>
            <button onClick={handleSignup} className='flex bg-black rounded-full py-2 px-4 text-white'>Start Reading <ArrowRight/></button>
            <button onClick={handleSignup} className='border border-gray-300 rounded-full py-2 px-6 text-black'>Start Writing</button>
          </div>
        </div>
      </section>

      <section className='px-16'>
        <div className='flex items-center justify-between'>
          <h1 className='font-heading text-2xl'>Featured</h1>
          <button className='text-[hsl(var(--muted-foreground))] flex items-center'>All Stories <ArrowRight size={16} /></button>
        </div>
        <div className='flex gap-4 my-6'>
          <StoriesCard/>
          <StoriesCard/>
        </div>
      </section>


      <section className='flex justify-between px-16'>
        <div>
            <h1 className='font-heading text-xl'>Latest</h1>
            <div className='flex flex-col gap-2'>
              <LatestCard/>
            </div>
        </div>
        <div>
          <h1 className="font-heading text-xl">Authors</h1>
            <div className='flex flex-col gap-2'>
              <AuthorsCard/>
              <AuthorsCard/>
            </div>
        </div>
      </section>

      <Footer/>

    </>
  )
}

export default App
