import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/home/Home'
import CustomCursor from './components/CustomCursor/CustomCursor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomCursor/>
    <Home />
  </StrictMode>,
)