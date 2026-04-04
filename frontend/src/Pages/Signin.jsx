import React ,{useState} from 'react'
import { ArrowRight, Eye, EyeClosed } from 'lucide-react';
import axios from "axios";
import { useNavigate } from 'react-router';

const Signin = () => {

        const [formData, setFormData] = useState({
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


        const handleSignin=async()=>{
            try{
                const response = await axios.post("http://localhost:8000/api/auth/signin", formData);
                console.log(response.data);
                
                navigate("/");

                localStorage.setItem("token",response.data.token);

            }
            catch(err)
            {
                console.log(err.response?.data || err.message);
            }
        }
    
  return (
    <>
        <div className='bg-[var(--background)] h-screen flex justify-center items-center'>

                <div className="text-center w-4/12">
                    <h1 className='font-[font-display] text-[6vh] tracking-tighter'>Welcome back</h1>
                    <p className='text-[hsl(var(--muted-foreground))]'>Sign in to continue writing</p>
                    <div className="w-12/12 text-left">
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

                        <button className='w-full bg-black rounded-lg mt-4 text-white flex gap-2 py-3 justify-center' onClick={handleSignin}>Sign In<ArrowRight /> </button>
                        <p className='text-[hsl(var(--muted-foreground))] text-center mt-2'>Don&apos;t have an account?<a href="/signup" className='underline text-black '>Signup</a></p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Signin
