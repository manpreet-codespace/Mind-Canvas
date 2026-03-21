import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App.jsx'
import Signup from './Pages/Signup.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
      </Routes>
    </Router>
  </StrictMode>
)
 