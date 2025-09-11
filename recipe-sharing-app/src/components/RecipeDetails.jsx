import { useParams, Link } from "react-router-dom";
import useRecipeStore from "../recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton id={recipe.id} />

      <p>
        <Link to="/">← Back to Recipes</Link>
      </p>
    </div>
  );
}

export default RecipeDetails;
