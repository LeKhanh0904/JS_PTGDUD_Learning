import { useState } from 'react';

const FetchReviewThen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetData = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) throw new Error('Lỗi mạng!');
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  };
  //Fetch gửi request sau đó chờ lấy header, chuyển JSON rồi Lấy data

  return (
    <div className="card">
      <h3>1. Fetch (.then)</h3>
      <button onClick={handleGetData}>Get Users</button>
      
      {loading && <p>Đang tải...</p>}
      
      <ul>
        {users.slice(0, 3).map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
};

export default FetchReviewThen;