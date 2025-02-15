import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import CustomCursor from './components/CustomCursor/CustomCursor'
import Home from './components/home/Home'
import Skills from './components/Skills/Skills'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CustomCursor/>  disable mouse cursor in body index.css */}

    <div>
      <Home />
      <hr/>
      <AboutMe/>
      <hr/>
      <Skills/>
      <hr/>
      <Footer/>
    </div>
  </StrictMode>,
)