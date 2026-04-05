import { useState, useEffect, useReducer, useRef } from 'react'
import './App.css'

function UseRefReview() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/*Click vào Button thấy viền ô Input sáng lên và con trỏ nhấp nháy bên trong*/}
      {/*Không làm component re-render như useState*/}
      <input ref={inputRef} placeholder="Nhập" />
      <button onClick={handleFocus}>
        Focus vào ô nhập
      </button>
    </div>
  );
}

export default UseRefReview
