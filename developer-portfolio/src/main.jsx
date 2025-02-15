import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import CustomCursor from './components/CustomCursor/CustomCursor'
import Home from './components/home/Home'
import Skills from './components/Skills/Skills'
import AboutMe from './components/AboutMe/AboutMe'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomCursor/>

    <div>
      <Home />
      <hr/>
      <AboutMe/>
      <hr/>
      <Skills/>
    </div>
  </StrictMode>,
)