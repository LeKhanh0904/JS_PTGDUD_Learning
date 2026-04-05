import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UserForm(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });

    console.log(formData);
    
  };

  return (
      <div>
        <div>
          <label>Name: </label>
          <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange} 
          />
        </div>
      
        <div>
          <label>Email: </label>
          <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </div>

        <div>
          <label>Age: </label>
          <input 
          type="number" 
          name="age"
          value={formData.age}
          onChange={handleChange}
          />
        </div>

        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.age}</p>
        </div>
      </div>
  );
  
}



export default UserForm;
