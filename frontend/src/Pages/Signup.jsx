import React, { useState } from 'react'
import { ArrowRight, Eye, EyeClosed } from 'lucide-react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const Signup = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [isShown, setIsShown] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevData => ({

            ...prevData,
            [name]: value
        }))
    }
    const togglePassword = () => {
        setIsShown(prev => !prev);
    }


    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/auth/signup",
                formData
            )
            console.log("Signup Successful", response.data);
            navigate("/");

        }
        catch (err) {
            console.error("error", err.response?.data || err.message);

        }

    }
    return (
        <>
            <div className='bg-[var(--background)] h-screen flex justify-center items-center'>

                <div className="text-center w-4/12">
                    <h1 className='font-[font-display] text-[6vh] tracking-tighter'>Create Account</h1>
                    <p className='text-[hsl(var(--muted-foreground))]'>Join MindCanvas and start sharing ideas</p>
                    <div className="w-12/12 text-left">
                        <label htmlFor="name" className='text-xs font-medium text-[hsl(var(--muted-foreground))]'>
                            Name <br />
                            <input name="name" id="name" type="text" placeholder='Your Name' onChange={handleChange} value={formData.name} className="border rounded-lg p-3 text-md placeholder:text-[14px] font-light bg-white w-full  " />
                        </label>
                        <br />
                        <label htmlFor="email" className='text-xs font-medium text-[hsl(var(--muted-foreground))]'>
                            Email<br />
                            <input name='email' id='email' type="email" placeholder="Your Email" onChange={handleChange} value={formData.email} className="border rounded-lg p-3 text-md placeholder:text-[14px] font-light bg-white w-full  " />

                        </label>
                        <br />
                        <label htmlFor="password" className='text-xs font-medium text-[hsl(var(--muted-foreground))] relative '>
                            Password <br />
                            <input name='password' id="password" type={isShown ? "text" : "password"} placeholder="Your Password" onChange={handleChange} value={formData.password} className=" relative border rounded-lg p-3  text-md placeholder:text-[14px] font-light bg-white w-full focus:ring-1 focus:ring-[hsl(var(--ring))] " />
                            <button onClick={togglePassword} className='absolute right-4 top-2/4 '>{isShown ? <EyeClosed className='w-4' /> : <Eye className='w-4' />}</button>
                        </label>

                        <button className='w-full bg-black rounded-lg mt-4 text-white flex gap-2 py-3 justify-center' onClick={handleSignup}>Create Account<ArrowRight /> </button>
                        <p className='text-[hsl(var(--muted-foreground))] text-center mt-2'>Have an account?<a href="/signin" className='underline text-black '>Signin</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
