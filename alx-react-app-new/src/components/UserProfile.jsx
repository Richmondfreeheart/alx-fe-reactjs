const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '16px', margin: '5px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontSize: '14px', color: 'gray' }}>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
