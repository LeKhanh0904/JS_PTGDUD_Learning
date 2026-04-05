import { useState } from 'react';

const FetchAsyncAwait = () => {
  const [users, setUsers] = useState([]);

  const handleGetData = async () => {
    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      const data = await response.json();
      
      setUsers(data);
    } catch (error) {
      console.error("Lỗi rồi:", error);
    }
  };

  return (
    <div>
      <h3>2. Async / Await</h3>
      <button onClick={handleGetData}>Get Users</button>
      <ul>
        {users.slice(0, 3).map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
};

export default FetchAsyncAwait;