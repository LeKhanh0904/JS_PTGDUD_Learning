import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai01 from './Bai01.jsx'
import Bai02 from './Bai02.jsx'
import Bai03 from './Bai03.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Bai01 /> */}
    {/* <Bai02/> */}
    <Bai03/>
  </StrictMode>,
)
