import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUpPage from './components/SignUpPage'
import Test from './components/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpPage></SignUpPage>
      {/* <Test></Test> */}
    </>
  )
}

export default App


