import React from 'react'
import { useNavigate } from 'react-router-dom'

const App = () => {

  const navigate= useNavigate();

  const handleSignup= ()=>{
    navigate("/signup");

  }
  const handleBack= ()=>{
    navigate(-1);

  }
  return (
    <>
    <div>
      <button onClick={handleSignup}>
        Signup button
      </button>
      <button onClick={handleBack}>
        Back
      </button>
    </div>
    </>
  )
}

export default App