import { useState, useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const handleClick = () => {
    const value = inputRef.current.value; // lấy giá trị từ input
    setText(value); // cập nhật state → re-render
  };

  // useEffect chạy khi text thay đổi
  useEffect(() => {
    if (text !== "") {
      console.log("Giá trị mới:", text);
    }
  }, [text]);

  return (
    <div>
      <input ref={inputRef} placeholder="Nhập gì đó..." onChange={handleClick}/>

      <button onClick={handleClick}>
        Hiển thị
      </button>

      <h3>Giá trị bạn nhập: {text}</h3>
    </div>
  );
}

export default App;