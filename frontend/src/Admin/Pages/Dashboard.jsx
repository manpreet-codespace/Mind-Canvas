import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import Sidebar from '../Components/Layout/Sidebar'
const Dashboard = () => {
  return (
    <>
        <Navbar/>
        <div className='flex'>
          <Sidebar />
          <main className='flex-1 p-6 font-body'>
            hello
          </main>
        </div>
    </>
  )
}

export default Dashboard
