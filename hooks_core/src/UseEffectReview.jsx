import { useState, useEffect } from 'react'
import './App.css'

function UseEffectReview() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Bạn đã click ${count} lần`;
    console.log("Effect đã chạy!");
  }, [count]);

  return (
    <div>
        {/*Mỗi lần click button thì tên tab thay đổi 
        ,bên trong console cũng hiện "Effect đã chạy!" mỗi khi click
        và đồng thời render lại giao diện => cập nhật count*/}
        <button onClick={() => setCount(count + 1)}>
            Click({count})
        </button>
    </div>

    
  );
}

export default UseEffectReview
