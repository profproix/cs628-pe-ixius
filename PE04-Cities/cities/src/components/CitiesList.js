import CityDetails from "./CityDetails.js";
import { Link, Outlet } from "react-router-dom";

const CitiesList = ({ cities }) => {
  return (
    <div>
      <ul>
        {cities.map((city) => (
          <li>
            <Link key={city.id} to={`/cities/${city.id}`}>
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
export default CitiesList;
