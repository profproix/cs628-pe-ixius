import { useParams } from "react-router-dom";

const CityDetails = ({ cities }) => {
  const { id } = useParams();
  console.log(id);
  console.log(cities);
  const city = cities.find((c) => c.id == id);
  console.log(city);
  return (
    <div>
      <h2>{city.name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
};
export default CityDetails;
