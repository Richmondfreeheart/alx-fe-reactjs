import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import UserContext from './UserContext';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );

    return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
    
  );
}

  return (
    <div>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Enjoys coding and traveling" 
      />
    </div>
  );

    return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React Counter App</h1>
      <Counter />
    </div>
  );

  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 30,
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
export default App;
