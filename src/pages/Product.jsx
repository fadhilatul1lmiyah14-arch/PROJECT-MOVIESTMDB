import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="product-page">
        <div className="movie-grid">
          {movies.map((movie) => (
            <Link
              to={`/product/${movie.id}`}
              className="movie-card"
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .product-page {
          padding: 120px 40px 40px;
          background: #ffffff;
          min-height: 100vh;
        }

        .movie-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 24px;
        }

        .movie-card {
          background: #020617;
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .movie-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }

        .movie-card p {
          color: white;
          font-size: 14px;
          padding: 10px;
          text-align: center;
        }

        .movie-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }
      `}</style>
    </>
  );
}


// import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import tmdb from "../api/tmdb";

// export default function Product() {
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   const search = searchParams.get("search") || "";

//   useEffect(() => {
//     tmdb
//       .get("/movie/popular")
//       .then((res) => setMovies(res.data.results))
//       .catch((err) => console.error(err));
//   }, []);

//   const filteredMovies = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "120px 40px" }}>
//       <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
//         🎬 List Movies
//       </h1>

//       {/* SEARCH */}
//       <input
//         type="text"
//         placeholder="Cari movie..."
//         value={search}
//         onChange={(e) =>
//           setSearchParams(
//             e.target.value ? { search: e.target.value } : {}
//           )
//         }
//         style={{
//           width: "100%",
//           maxWidth: "420px",
//           padding: "12px 16px",
//           borderRadius: "10px",
//           marginBottom: "40px",
//         }}
//       />

//       {/* HASIL → KLIK LANGSUNG KE DETAIL */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
//           gap: "24px",
//         }}
//       >
//         {filteredMovies.map((movie) => (
//           <Link
//             key={movie.id}
//             to={`/products/${movie.id}`}
//             style={{ textDecoration: "none", color: "inherit" }}
//           >
//             <div
//               style={{
//                 backgroundColor: "#020617",
//                 borderRadius: "16px",
//                 overflow: "hidden",
//                 color: "white",
//               }}
//             >
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 style={{
//                   width: "100%",
//                   height: "260px",
//                   objectFit: "cover",
//                 }}
//               />
//               <div style={{ padding: "12px" }}>
//                 <h3 style={{ fontSize: "14px" }}>{movie.title}</h3>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
