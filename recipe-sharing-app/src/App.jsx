import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">All Recipes</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Recipe Sharing App</h1>
              <AddRecipeForm />
              <RecipeList />
            </div>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

