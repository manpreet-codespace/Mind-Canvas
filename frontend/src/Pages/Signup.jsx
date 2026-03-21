import React from 'react'
import { useNavigate } from 'react-router-dom'
import signupImage from "../assets/images/pexels-knownasovan-57690.jpg"

const Signup = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);

    }

    return (
        <>


            <div className='bg-[var(--background)] h-screen flex justify-center items-center'>
                <div className='h-[80%] w-[70%] shadow-lg rounded-xl flex gap-6 items-center'>
                    <div className='flex flex-1 h-[100%] relative'>
                        <button onClick={handleBack} className='absolute z-1 p-2  font-bold '>
                            Back
                        </button>
                        <img src={signupImage} alt="signupImage" className='rounded-l-lg relative' />
                        <div className='absolute inset-0 bg-white/20 '></div>
                    </div>
                    <div className='flex-1' >

                        <label for="fname" className='flex gap-2 items-center'>
                            First Name
                            <input type="text" name="fname" id='fname' placeholder='Enter your first name' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br />

                        <label for="lname" className='flex gap-2 items-center'>
                            Last Name
                            <input type="text" name="lname" id='lname' placeholder='Enter your last name' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br />


                        <label for="phone-number" className='flex gap-2 items-center'>
                            Phone Number
                            <input type="text" name="phone-number" id='phone-number' placeholder='Enter your phone-number' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br />

                        <label for="email" className='flex gap-2 items-center'>
                            Email
                            <input type="email" name="email" id='email' placeholder='Enter your email' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br />

                        <label for="address" className='flex gap-2 items-center'>
                            Address
                            <textarea type="text" name="address" id='address' placeholder='Enter your address' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br />


                        <button className="px-42 py-2  rounded bg-[var(--primary-accent)] hover-[var(--accent-hover)] text-[var(--surface)]">
                            Signup
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup