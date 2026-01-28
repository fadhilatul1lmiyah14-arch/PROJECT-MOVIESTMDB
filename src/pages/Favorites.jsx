import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Favorites() {
  const { state, dispatch } = useContext(FavoritesContext);
  const favorites = state.favorites;

  if (favorites.length === 0) {
    return (
      <div
        style={{
          padding: "120px 40px",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <h2>Favorites masih kosong </h2>
        <Link to="/product">← Kembali ke list data</Link>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "120px 40px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}> Favorites</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "24px",
        }}
      >
        {favorites.map((movie) => (
          <div
            key={movie.id}
            style={{
              background: "#020617",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            <Link to={`/product/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />
            </Link>

            <p
              style={{
                color: "white",
                fontSize: "14px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {movie.title}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FAVORITE",
                  payload: movie.id,
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "none",
                background: "#ef4444",
                color: "white",
                cursor: "pointer",
              }}
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
