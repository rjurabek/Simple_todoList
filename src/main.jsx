import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Taks from './Tasks.jsx'
import Tasks from './Tasks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tasks />
  </StrictMode>,
)
