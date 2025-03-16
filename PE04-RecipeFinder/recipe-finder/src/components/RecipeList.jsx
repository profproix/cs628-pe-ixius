import RecipeDetails from "./RecipeDetails";
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  console.log(recipes);
  return (
    <>
      <h1>Recipes</h1>
      <ul className="recipe-container">
        {recipes.map((recipe) => (
          <li>
            <Link key={recipe.id} to={`/recipes/${recipe._id}`}>
              {recipe.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecipeList;
