import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile'; // Adjusted path


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <WelcomeMessage />
    </div>
  );
}

  <div>
      <Header />
      <MainContent />
      <Footer />
    </div>

    


export default App
