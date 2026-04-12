import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import recoilAtom from '../stateAtom/recoilAtom'

export default function ComB() {
    const [value, setValue] = useRecoilState(recoilAtom);
    

    function handleClickTang (){
        setValue(value + 1)     
        console.log("Tăng: " + value);
        
    }

    function handleClickGiam (){
        setValue(value - 1)     
        console.log("Giảm: " + value);
        
    }

    function handleClickReset (){
        setValue(0)     
        console.log("Reset: " + value);
        
    }

  return (
    <div>
      <button onClick={handleClickTang}>Tăng</button>
      <button onClick={handleClickGiam}>Giảm</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}
