import { useState } from 'react'
import './App.css'

function UseStateReview() {
  const [steps, setSteps] = useState(0);

  return (
    <>
      <div>
        <h3>Số bước chân: {steps}</h3>
        {/* Khi bấm nút, giao diện con số thay đổi ngay lập tức. 
        React render component với giá trị steps mới */}
        {/* Đã thử với onClick={addStep()}>, lỗi do render lại khi đã vẽ lại giao diện
        => gây vòng lặp vô hạn*/}
        <button onClick={() => setSteps(steps + 1)}>Đi 1 bước</button>
        <button onClick={() => setSteps(0)}>Reset</button>
      </div>
    </>
  )
}

export default UseStateReview
