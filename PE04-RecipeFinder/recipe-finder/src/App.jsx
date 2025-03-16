import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { useState, useEffect } from "react";

import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import EditRecipe from "./components/EditRecipe";

import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const res = await fetch("http://localhost:5050/recipes");

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    setRecipes(data);
  };

  const postRecipe = async (newRecipe) => {
    const res = await fetch("http://localhost:5050/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    setRecipes((prevRecipe) => [...prevRecipe, data]);
  };

  const deleteRecipe = async (id) => {
    const res = await fetch(`http://localhost:5050/recipes/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== recipeId)
    );
  };

  const updateRecipe = async (recipe) => {
    const res = await fetch(`http://localhost:5050/recipes/${recipe._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    setRecipes((prevRecipe) => [...prevRecipe, data]);
  };

  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/recipes" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">Add Recipe</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route
            exact
            path="/recipes"
            element={<RecipeList recipes={recipes} />}
          />
          <Route
            path="recipes/:id"
            element={<RecipeDetails deleteRecipe={deleteRecipe} />}
          />
          <Route
            path="recipes/edit/:id"
            element={<EditRecipe updateRecipe={updateRecipe} />}
          />

          <Route
            path="/create"
            element={<AddRecipe postRecipe={postRecipe} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
