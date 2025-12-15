import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col h-screen bg-slate-100'>
      <Navbar/>
      <App />
    </div>
  </StrictMode>
)
