// src/components/UserProfile.jsx
import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
