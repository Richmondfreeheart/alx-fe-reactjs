import React from 'react';
import UserProfile from './components/UserProfile';  // Correct import path

function App() {
  return (
    <div className="App">
      <UserProfile />  {/* Make sure this is here */}
    </div>
  );
}

export default App;
