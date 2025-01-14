import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieShowPage() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movies/" + movieId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.selectedMovie);
      });
  }, []);
  return (
    <>
      <div className="container py-4">
        <h1>{movie.title}</h1>
        <div className="row">
          <div className="col">
            <img
              src={`http://localhost:3000/movies_cover/${movie.image}`}
              className="card-img-top img-fluid"
              alt={movie.title}
            />
          </div>
          <div className="col">
            <p>{movie.description}</p>
            <h1>Director: {movie.director}</h1>
            <h2>Rating: {movie.rating}</h2>
            <h3>Duration: {movie.duration} minutes</h3>
            <Link to="/movies" className="btn btn-primary">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
