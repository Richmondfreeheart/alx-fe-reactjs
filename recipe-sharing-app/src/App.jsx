import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

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

   return (
    <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/add">Add Recipe</Link>
      </nav>

      <Routes>
        {/* Home page showing all recipes */}
        <Route path="/" element={<RecipeList />} />

        {/* Add recipe page */}
        <Route path="/add" element={<AddRecipeForm />} />

        {/* Dynamic route for recipe details */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
export default App;
