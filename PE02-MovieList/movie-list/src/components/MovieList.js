import ListItem from "./ListItem";
import { useState, useEffect } from "react";
const movies = [
  {
    title: "Die Hard",
    genre: "Action",
    releaseYear: 1988,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Fantasy",
    releaseYear: 2001,
  },
  {
    title: "Event Horizon",
    genre: "Horror",
    releaseYear: 1997,
  },
  {
    title: "Onibaba",
    genre: "Horror",
    releaseYear: 1964,
  },
  {
    title: "The Lighthouse",
    genre: "Psychological Horror",
    releaseYear: 2019,
  },
  {
    Title: "Moon",
    genre: "Science Fiction",
    releaseYear: 2009,
  },
];
function MovieList() {
  const [moviesState, setMoviesState] = useState(movies);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    setGenres([...new Set(movies.map((movie) => movie.genre))]);
  }, []);

  const handleChange = (e) => {
    setMoviesState([
      ...movies.filter((movie) => {
        return movie.genre == e.target.value;
      }),
    ]);
  };

  return (
    <>
      <select onChange={(e) => handleChange(e)}>
        {genres.map((genre) => (
          <option value={genre}>{genre}</option>
        ))}
      </select>
      <div className="container">
        {moviesState.map((movie) => (
          <ListItem {...movie} />
        ))}
      </div>
    </>
  );
}
export default MovieList;
