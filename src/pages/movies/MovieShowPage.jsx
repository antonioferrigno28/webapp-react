import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div className="container py-4">{movie && <p>{movie.title}</p>}</div>
    </>
  );
}
