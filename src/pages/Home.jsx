import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
  // "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
  "https://images.unsplash.com/photo-1558980664-10fb54e6d152?auto=format&fit=crop&w=1600&q=80",

];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2,6,23,0.85), rgba(2,6,23,0.85)),
            url(${images[current]})
          `,
        }}
      >
        <h1 className="hero-title">MOVIES SALWA FADHILATUL</h1>

        <p>
          Website daftar film modern yang menampilkan
          film populer lengkap dengan detail dan favorit 🎬
        </p>

        <Link to="/product" className="explore-btn">
          Explore Movies
        </Link>
      </section>

      <style>{`
        .hero {
          height: 100vh;
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          padding: 0 20px;
          transition: background-image 1s ease-in-out;
        }

        .hero-title {
          font-size: 64px;
          letter-spacing: 4px;
          margin-bottom: 12px;
        }

        .hero p {
          max-width: 600px;
          line-height: 1.8;
          opacity: 0.9;
          margin-bottom: 24px;
        }

        .explore-btn {
          padding: 12px 32px;
          border-radius: 30px;
          background: #38bdf8;
          color: #191b22;
          font-size: 14px;
          text-decoration: none;
          transition: 0.3s;
        }

        .explore-btn:hover {
          background: #0ea5e9;
        }
      `}</style>
    </>
  );
}
