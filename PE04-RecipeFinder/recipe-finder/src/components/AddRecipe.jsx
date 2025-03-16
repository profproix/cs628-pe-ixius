import { useState } from "react";
import { useNavigate } from "react-router";

function AddRecipe({ postRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    totalTimeMinutes: "",
    servings: "",
    ingredients: "",
    instructions: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postRecipe(recipe);
    navigate("/recipes");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={recipe.name}
        onChange={handleChange}
      ></input>

      <label>Prep Time</label>
      <input
        type="number"
        name="prepTime"
        value={recipe.prepTime}
        onChange={handleChange}
      ></input>

      <label>Cook Time</label>
      <input
        type="number"
        name="cookTime"
        value={recipe.cookTime}
        onChange={handleChange}
      ></input>

      <label>Servings</label>
      <input
        type="number"
        name="servings"
        value={recipe.servings}
        onChange={handleChange}
      ></input>

      <label>
        Ingredients :
        <textarea
          name="ingredients"
          rows="5"
          value={recipe.ingredients}
          onChange={handleChange}
        ></textarea>
      </label>

      <label>
        Instructions:
        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        ></textarea>
      </label>
      <input type="submit" />
    </form>
  );
}

export default AddRecipe;
