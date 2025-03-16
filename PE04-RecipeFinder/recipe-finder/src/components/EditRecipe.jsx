import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

function EditRecipe({ updateRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    prepTime: "",
    cookTime: "",
    totalTime: "",
    servings: "",
    ingredients: "",
    instructions: "",
  });

  const { id } = useParams();
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
    setFormData(data);
  };
  const handleClick = () => {
    deleteRecipe(formData._id);
    navigate("/recipes");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateRecipe(formData);
    navigate("/recipes");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      ></input>

      <label>Prep Time</label>
      <input
        type="number"
        name="prepTime"
        value={formData.prepTime}
        onChange={handleChange}
      ></input>

      <label>Cook Time</label>
      <input
        type="number"
        name="cookTime"
        value={formData.cookTime}
        onChange={handleChange}
      ></input>

      <label>Servings</label>
      <input
        type="number"
        name="servings"
        value={formData.servings}
        onChange={handleChange}
      ></input>

      <label>
        Ingredients :
        <textarea
          name="ingredients"
          rows="5"
          value={formData.ingredients}
          onChange={handleChange}
        ></textarea>
      </label>

      <label>
        Instructions:
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
        ></textarea>
      </label>
      <input type="submit" />
    </form>
  );
}

export default EditRecipe;
