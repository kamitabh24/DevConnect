import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:8080/api/auth/login", formData);
    localStorage.setItem("token", res.data);
    alert("Login successful!");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;