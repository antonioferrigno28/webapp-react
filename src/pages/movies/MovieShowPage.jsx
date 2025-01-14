import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieShowPage() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movies/" + movieId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.selectedMovie);
        setReviews(data.reviews);
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
            <h1 className="mb-4">Regista: {movie.director}</h1>
            <h1 className="mb-4">Descrizione:</h1>
            <h4 className="mb-4">{movie.abstract}</h4>
            <Link to="/movies" className="btn btn-primary">
              Torna alla lista film
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <h2>Recensioni</h2>
          <div className="row">
            {reviews.map((review) => (
              <div className="col-md-4 mb-4" key={review.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Voto: {review.vote} ⭐</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Recensito da: {review.name}
                    </h6>
                    <p className="card-text">"{review.text}"</p>
                  </div>
                  <div className="card-footer">
                    <p className="text-muted">
                      Recensito il:{" "}
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
