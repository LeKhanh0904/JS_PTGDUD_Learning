import React from 'react'
import { useRecoilValue } from 'recoil'
import recoilAtom from '../stateAtom/recoilAtom'

export default function ComA() {
    var value = useRecoilValue(recoilAtom);

  return (
    <div>
      <h1>Com A: {value}</h1>
    </div>
  )
}
