import { useState, useEffect, useReducer } from 'react'
import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'TANG': return { count: state.count + 1 };
    case 'GIAM': return { count: state.count - 1 };
    default: return state;
  }
  
};


// Logic tách biệt khỏi giao diện chỉ trong hàm reducer
function UseReducerReview() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  console.log(state);
  
  return (
    <div>
      <h3>Kết quả: {state.count}</h3>
      <button onClick={() => dispatch({ type: 'GIAM' })}>-</button>
      <button onClick={() => dispatch({ type: 'TANG' })}>+</button>
    </div>
  );
}

export default UseReducerReview
