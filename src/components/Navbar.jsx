import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">🎬 MOVIES</div>

          <div className="navbar-menu">
           <Link to="/">Beranda</Link>
            <Link to="/product">List Data</Link>
           <Link to="/favorites">Favorites</Link>

         </div>
        </div>
      </nav>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(55, 59, 73, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
        }

        .navbar-container {
          max-width: 1200px;
          margin: auto;
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          color: white;
          font-size: 25px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .navbar-menu {
          display: flex;
          gap: 35px;
        }

        .navbar-menu a {
          color: #e5e7eb;
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
          transition: 0.3s;
        }

        .navbar-menu a:hover {
          color: #38bdf8;
        }
      `}</style>
    </>
  );
}
