import React from 'react'
import { adminMenu, authorMenu } from '../../Config/SidebarConfig';
import { NavLink } from 'react-router-dom';
const Sidebar = ({ role = "admin" }) => {
    const menu = role === "admin" ? adminMenu : authorMenu;

  return (
    <>
        <section className='min-h-screen w-64 border-r border-gray-300 bg-white px-4 py-6'>
            <div className='font-heading text-2xl flex gap-2 items-center'>
                <span className='bg-black p-1 text-xl rounded-lg text-white inline font-sans '>M</span>
                MindCanvas
            </div>


            <div className='mt-8'>
            {
                menu.map((item,index)=>(
                    <NavLink 
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 mb-2 font-body text-sm ${
                        isActive ? 'bg-black text-white' : 'text-[hsl(var(--muted-foreground))] hover:bg-gray-100'
                      }`
                    }>

                        {item.name}

                    </NavLink>
                ))
            }
            </div>

        </section>
    </>
  )
}

export default Sidebar
