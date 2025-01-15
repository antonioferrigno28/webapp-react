import { useState } from "react";

export default function ReviewsForm({ movieId, updateReviews }) {
  const formInitialData = {
    name: "",
    vote: "",
    text: "",
  };

  const [reviewForm, setReviewForm] = useState(formInitialData);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (validateForm(reviewForm)) {
      const storeReviewUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;
      fetch(storeReviewUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(reviewForm),
      })
        .then((res) => res.json())
        .then(() => {
          const getReviewsUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;
          fetch(getReviewsUrl)
            .then((res) => res.json())
            .then((data) => {
              updateReviews(data.reviews);
            });
          setReviewForm(formInitialData);
        });
    } else {
      alert("Il form non è valido");
    }
  };

  const validateForm = ({ name, text, vote }) => {
    if (!name || !text) return false;
    const voteInt = parseInt(vote);
    if (isNaN(voteInt) || voteInt < 1 || voteInt > 5) return false;
    return true;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setReviewForm({
      ...reviewForm,
      [name]: value,
    });
  };

  return (
    <form
      className="row g-3 align-items-end mb-3"
      onSubmit={handleReviewSubmit}
    >
      <div className="col-4">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          required
          className="form-control"
          id="name"
          name="name"
          value={reviewForm.name}
          onChange={handleFormChange}
        />
      </div>
      <div className="col-4">
        <label htmlFor="vote" className="form-label">
          Voto (1-5)
        </label>
        <input
          type="number"
          required
          className="form-control"
          id="vote"
          name="vote"
          min="1"
          max="5"
          value={reviewForm.vote}
          onChange={handleFormChange}
        />
      </div>
      <div className="col-4">
        <label htmlFor="text" className="form-label">
          Testo
        </label>
        <textarea
          className="form-control"
          id="text"
          name="text"
          value={reviewForm.text}
          required
          onChange={handleFormChange}
        ></textarea>
      </div>
      <div className="col-2">
        <button className="btn btn-primary" type="submit">
          Invia
        </button>
      </div>
    </form>
  );
}
