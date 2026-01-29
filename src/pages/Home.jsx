import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const images = [
  "/images/gambar1.jpg",
  "/images/gambar2.jpg",
  "/images/gambar3.jpg",
];

export default function Home() {
  // state menyimpan gambar  // state stores the image
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //mengganti gambar setiap 4 detik  // change image every 4 seconds
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    // komponen di-unmount // component is unmounted
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
