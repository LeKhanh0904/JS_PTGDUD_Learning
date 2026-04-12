import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import recoilAtom from './Bai1/stateAtom/recoilAtom'
import ComA from './Bai1/components/ComA'
import ComB from './Bai1/components/ComB'
import ChangeUI from './Bai2/components/changeUI'

function App() {
  var value = useRecoilValue(recoilAtom);

  return (
    <>
      {/* Bài 1 */}
      {/* <h1>Atom value: {value}</h1>
      <ComA></ComA>
      <ComB></ComB> */}


      {/* Bài 2 */}
      <ChangeUI></ChangeUI>
      

    </>
  )
}

export default App
