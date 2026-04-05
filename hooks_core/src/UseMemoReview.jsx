import { useState, useEffect, useReducer, useRef, useMemo } from 'react'
import './App.css'

function UseMemoReview() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    console.log("Đang tính toán...");
    for(let i=0; i< 1000000000; i++) {} 
    return number * 2;
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    padding: 20
  };


  // Khi nhập số mới thấy dòng "Đang tính toán..." và re-render lại giao diện cập nhập number
  // Nếu không dùng useMemo, mỗi lần đổi màu, máy sẽ bị đơ để tính lại
  // => Đổi màu không liên quan phép tính
  return (
    <div style={themeStyles}>
      <input 
        type="number" 
        value={number} 
        onChange={e => setNumber(parseInt(e.target.value))} 
      />
      <div>Kết quả x2: {doubleNumber}</div>
      <button onClick={() => setDark(!dark)}>Đổi màu nền</button>
    </div>
  );
}

export default UseMemoReview
