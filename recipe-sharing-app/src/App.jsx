import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );

  function App() {
    return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
    
  );
}
}
function App() {
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
}

export default App;
  

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

