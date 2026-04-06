import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App.jsx'
import Signup from './Pages/Signup.jsx';
import Signin from './Pages/Signin.jsx';
import Dashboard from './Admin/Pages/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/admin-dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  </StrictMode>
)
 