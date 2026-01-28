import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import tmdb from "../api/tmdb";
import { FavoritesContext } from "../context/FavoritesContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const { dispatch } = useContext(FavoritesContext);

  useEffect(() => {
    tmdb
      .get(`/movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const addToFavorites = () => {
    dispatch({ type: "ADD_FAVORITE", payload: movie });
    alert("Berhasil ditambahkan ke Favorites");
  };

  return (
    <div
      style={{
        padding: "120px 40px",
        backgroundColor: "#020617",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        gap: "30px",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "16px" }}
      />

      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          {movie.title}
        </h1>

        <p>Ratings⭐: {movie.vote_average}</p>
        <p>Release: {movie.release_date}</p>

        <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
          {movie.overview}
        </p>

        {/*  TOMBOL FAVORITES */}
        <button
          onClick={addToFavorites}
          style={{
            marginBottom: "20px",
            padding: "10px 18px",
            backgroundColor: "#facc15",
            color: "#020617",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add to Favorites
        </button>

        <br />

        {/* TOMBOL KEMBALI */}
        <Link
          to="/product"
          style={{ textDecoration: "none", color: "#2563eb" }}
        >
          ← Kembali ke list data
        </Link>
      </div>
    </div>
  );
}
