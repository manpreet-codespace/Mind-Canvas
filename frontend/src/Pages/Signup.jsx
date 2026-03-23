import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signupImage from "../assets/images/pexels-knownasovan-57690.jpg"
import axios from "axios";

const Signup = () => {

    // const [fname, setFname]= useState("");
    // const [lname, setLname]= useState("");
    // const [email,setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [address, setAddress] = useState("");
    const [formData,setFormData]= useState({
        fname:'',
        lname:'',
        email:'',
        phoneNumber:'',
        password:'',
        address:''
    });
    
    const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData(prevData=>({

            ...prevData,
            [name]:value
        }))
    }

    const navigate = useNavigate();


    const handleSignup=async()=>{
        try{
            const response = await axios.post("http://localhost:8000/api/auth/signup",
                formData
            )
            console.log("Signup Successfull", response.data);

        }
        catch(err)
        {
            console.error("error", err.response?.data || err.message);

        }

    }
    const handleBack = () => {
        navigate(-1);

    }

    return (
        <>
            <div className='bg-[var(--background)] h-screen flex justify-center items-center'>
                <div className='h-[90%] w-[70%] shadow-lg rounded-xl flex gap-6 items-center'>
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
                            <input type="text" name="fname" id='fname' onChange={handleChange} value={formData.fname} placeholder='Enter your first name' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br />

                        <label for="lname" className='flex gap-2 items-center'>
                            Last Name
                            <input type="text" name="lname" id='lname' onChange={handleChange} value={formData.lname} placeholder='Enter your last name' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br />


                        <label for="phoneNumber" className='flex gap-2 items-center'>
                            Phone Number
                            <input type="text" name="phoneNumber" id='phoneNumber' onChange={handleChange} value={formData.phoneNumber} placeholder='Enter your phone-number' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br />

                        <label for="email" className='flex gap-2 items-center'>
                            Email
                            <input type="email" name="email" id='email' onChange={handleChange} value={formData.email} placeholder='Enter your email' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br />
                          <label for="password" className='flex gap-2 items-center'>
                            Password
                            <input type="password" name="password" id='password' onChange={handleChange} value={formData.password} placeholder='Enter your password' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br/>
                        <label for="address" className='flex gap-2 items-center' >
                            Address
                            <textarea type="text" name="address" id='address' onChange={handleChange} value={formData.address} placeholder='Enter your address' className='border border-grey-200 rounded-sm p-2' />
                        </label>
                        <br />


                        <button className="px-42 py-2  rounded bg-[var(--primary-accent)] hover-[var(--accent-hover)] text-[var(--surface)]" onClick={handleSignup}>
                            Signup
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup