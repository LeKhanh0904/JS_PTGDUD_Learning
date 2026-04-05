import React, { useState, useEffect, useReducer, useRef, useMemo, useCallback } from 'react'
import './App.css'

const ButtonChild = React.memo(({ onClick, children }) => {
  console.log(`Render nút: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

function UseCallbackReview() {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(1000);

  const tangLuong = useCallback(() => {
    setSalary(s => s + 100);
  }, []);

  return (
    <div>
      <h3>Lương: {salary}</h3>
      <h3>Biến đếm (gây re-render cha): {count}</h3>
      
      {/* Ngăn component con re-render không cần thiết khi component cha cập nhật không liên quan. */}
      <ButtonChild onClick={tangLuong}>Tăng lương</ButtonChild>
      
      <div>
        <button onClick={() => setCount(count + 1)}>Tăng biến đếm</button>
      </div>
    </div>
  );
}

export default UseCallbackReview
