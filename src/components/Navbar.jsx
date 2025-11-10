'use client';

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      background: "#111",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 16px rgba(0,0,0,0.10)"
    }}>
      <div style={{
        maxWidth: "1000px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem"
      }}>
        <h2 style={{
          color: "#00bfff", letterSpacing: ".5px", fontWeight: 700
        }}>Yogita Singh</h2>
        <div className="nav-links" style={{ display: "flex", gap: "2rem" }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
      <style jsx>{`
        .nav-link {
          color: #fff;
          font-weight: 500;
          position: relative;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #00bfff;
        }
        .nav-link::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #00bfff;
          transition: width .3s;
          position: absolute;
          left: 0;
          bottom: -6px;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media(max-width: 600px) {
          .nav-links {
            gap: 1.1rem;
          }
          h2 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </nav>
  );
}
