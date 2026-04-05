import { useState } from 'react';
import axios from 'axios';

const AxiosReview = () => {
  const [users, setUsers] = useState([]);

  const handleGetData = async () => {
    try {

      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      

      setUsers(res.data); 
    } catch (error) {
      console.error("Axios lỗi:", error);
    }
  };

  return (
    <div>
      <h3>3. Axios</h3>
      <button onClick={handleGetData}>Get Users</button>
      <ul>
        {users.slice(0, 3).map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
};

export default AxiosReview;