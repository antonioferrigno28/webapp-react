import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movies";
    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
    <>
      <main className="container py-4">
        <section className="text-center">
          <h1 className="mb-5">Lista Film </h1>
          {/* generate a card for each movie */}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {movies.map((movie) => (
              <div key={movie.id} className="col">
                <div className="card h-100">
                  <img
                    src={`http://localhost:3000/movies_cover/${movie.image}`}
                    className="card-img-top fixed-size-img"
                    alt={movie.title}
                  />
                  <div className="card-body h-100">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.description}</p>
                    <Link
                      to={`/movies/${movie.id}`}
                      className="btn btn-primary"
                    >
                      Mostra dettagli
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
