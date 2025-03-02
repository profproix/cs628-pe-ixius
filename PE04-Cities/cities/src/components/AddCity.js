import { useState } from "react";
import { Navigate } from "react-router-dom";

const AddCity = ({ updateCities, nextID }) => {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    population: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCities({ ...formData, id: nextID });
    setRedirectToHome(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  if (redirectToHome) {
    return <Navigate to={`/cities`} />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label>Country</label>
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />
      <label>Population</label>
      <input
        type="text"
        name="population"
        value={formData.population}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};

export default AddCity;
