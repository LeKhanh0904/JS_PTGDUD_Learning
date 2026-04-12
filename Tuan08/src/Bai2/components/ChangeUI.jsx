import React from 'react'
import { useRecoilState } from 'recoil'
import uiAtom from '../stateAtom/uiAtom'

export default function ChangeUI() {

    const [theme, setTheme] = useRecoilState(uiAtom)

    function handleClick(){
        console.log(theme);

        setTheme(theme == 'light' ? 'dark':'light')
        
    }


  return (
    <div className={theme}>
      <div className='content'>LaLa đã đến đây</div>
      <button onClick={handleClick}>Change theme</button>
    </div>
  )
}
