import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";


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
      <h1 style={{ textAlign: "center" }}>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
export default App;
