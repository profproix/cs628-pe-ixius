import "./App.css";
import CitiesList from "./components/CitiesList";
import AddCity from "./components/AddCity";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CityDetails from "./components/CityDetails";
const citiesData = [
  { id: 1, name: "Seattle", country: "USA", population: "733,919" },
  { id: 2, name: "Tokyo", country: "Japan", population: "37,468,000" },
  { id: 3, name: "Cairo", country: "Egypt", population: "22,623,900" },
];

function App() {
  const [cities, setCities] = useState(citiesData);
  const updateCities = (data) => setCities((prevData) => [...prevData, data]);
  console.log(cities.length);
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Cities Application</h1>
          <nav>
            <ul>
              <li>
                <Link to="/cities">City List</Link>
              </li>
              <li>
                <Link to="/new_city">Add City</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/cities" element={<CitiesList cities={cities} />}>
            <Route
              path="/cities/:id"
              element={<CityDetails cities={cities} />}
            />
          </Route>
          <Route
            path="/new_city"
            element={
              <AddCity updateCities={updateCities} nextID={cities.length} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
