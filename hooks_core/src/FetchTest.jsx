import { useState, useEffect } from 'react';

const FetchReviewThen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false); // 🔥 thêm state

//   const handleGetData = () => {
//     const id = Number(userId);

//     if (!Number.isInteger(id) || id < 1 || id > 10) {
//       setError("User not found");
//       setUsers([]);
//       return;
//     }

//     setError("");
//     setLoading(true);
//     setShowAll(false); // chỉ hiện 1 user

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         if (!response.ok) throw new Error('Lỗi mạng!');
//         return response.json();
//       })
//       .then((data) => {
//         const user = data.find(u => u.id === id);

//         if (!user) {
//           setError("User not found");
//           setUsers([]);
//         } else {
//           setUsers([user]);
//         }

//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setError("User not found");
//         setLoading(false);
//       });
//   };

  useEffect(() => {
  const id = Number(userId);

  // Không gọi khi input rỗng
  if (userId === "") {
    setUsers([]);
    setError("");
    return;
  }

  // Validate
  if (!Number.isInteger(id) || id < 1 || id > 10) {
    setError("User not found");
    setUsers([]);
    return;
  }

  setLoading(true);
  setError("");
  setShowAll(false);

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      const user = data.find(u => u.id === id);

      if (!user) {
        setError("User not found");
        setUsers([]);
      } else {
        setUsers([user]);
      }

      setLoading(false);
    })
    .catch(() => {
      setError("User not found");
      setLoading(false);
    });

}, [userId]);

  // 🔥 NEW: lấy tất cả user
  const handleFindAllUsers = () => {
    setLoading(true);
    setError("");
    setShowAll(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Lỗi khi tải dữ liệu");
        setLoading(false);
      });
  };

  return (
    <div className="card">
      <h3>Fetch (.then)</h3>

      <input
        type="text"
        placeholder="Nhập User ID (1-10)"
        value={userId}
        onChange={(e) => {
            setUserId(e.target.value)
        }}
      />

      {/* <button onClick={handleGetData}>Get User</button> */}

      {/* 🔥 Button mới */}
      <button onClick={handleFindAllUsers}>
        Find All Users
      </button>

      {loading && <p>Đang tải...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {showAll ? (
              // 👉 chỉ hiện name
              u.name
            ) : (
              // 👉 hiện full info
              <>
                <p><b>ID:</b> {u.id}</p>
                <p><b>Name:</b> {u.name}</p>
                <p><b>Email:</b> {u.email}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchReviewThen;