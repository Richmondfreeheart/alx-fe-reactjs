import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './RecipeList';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">All Recipes</Link> | 
        <Link to="/favorites">Favorites</Link> | 
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </Router>
  );
}

export default App;
