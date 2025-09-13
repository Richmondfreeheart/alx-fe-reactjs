import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // go back to home after deleting
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
