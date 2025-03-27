import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BMI from './BMI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BMI/>
  </StrictMode>,
)
