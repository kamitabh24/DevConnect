import axios from 'axios';
import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', bio: '', skills: '', githubLink: '' });

  const handleSubmit = async () => {
    await axios.post("http://localhost:8080/api/auth/register", formData);
    alert("Registered successfully");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
      <input placeholder="Skills" onChange={e => setFormData({ ...formData, skills: e.target.value })} />
      <input placeholder="GitHub Link" onChange={e => setFormData({ ...formData, githubLink: e.target.value })} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;