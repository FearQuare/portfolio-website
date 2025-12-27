import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col bg-slate-100 w-screen'>
      <Navbar/>
      <App />
    </div>
    <Footer />
  </StrictMode>
)
