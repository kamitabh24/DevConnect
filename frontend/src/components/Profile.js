import axios from 'axios';
import { useEffect, useState } from 'react';

function Profile({ email }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/auth/profile/" + email)
      .then(res => setUser(res.data));
  }, [email]);

  return user ? (
    <div>
      <h2>{user.name}'s Profile</h2>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      <p>Skills: {user.skills}</p>
      <a href={user.githubLink}>GitHub</a>
    </div>
  ) : <p>Loading...</p>;
}

export default Profile;