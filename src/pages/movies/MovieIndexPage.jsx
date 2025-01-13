import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movies";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.movies);
      });
  }, []);

  return (
    <>
      <div className="container py-4">
        <h1>Movies list </h1>

        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={"/movies/" + movie.id}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
