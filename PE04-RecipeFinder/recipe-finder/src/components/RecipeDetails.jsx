import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function RecipeDetails({ deleteRecipe }) {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchOneRecipes();
  }, []);

  const fetchOneRecipes = async () => {
    const res = await fetch(`http://localhost:5050/recipes/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    setRecipe(data);
  };
  const handleClick = () => {
    deleteRecipe(recipe._id);
    navigate("/recipes");
  };

  return (
    <>
      <h2>{recipe.name}</h2>
      <ul>
        <li>Prep Time: {recipe.prepTimeMinutes}</li>
        <li>Cook Time: {recipe.cookTimeMinutes}</li>
        <li>Total Time: {recipe.totalTimeMinutes}</li>
        <li>Servings: {recipe.servings}</li>
        <li>Ingredients: {recipe.ingredients}</li>
        <li>Instructions: {recipe.instructions}</li>
      </ul>
      <Link to={`/recipes/edit/${recipe._id}`}>Edit</Link>
      <button onClick={handleClick}>Delete</button>
    </>
  );
}

export default RecipeDetails;
