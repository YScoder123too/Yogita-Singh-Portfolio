'use client';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero + " hero-animate"}>
      <h1>
        Hello, I'm{" "}
        <span className="gradient-name">Yogita Singh</span>
      </h1>
      <p className="hero-desc">
        A passionate web developer building responsive and modern web apps.
      </p>
      <a
        href="/resume.pdf"
        download
        className="button-link"
      >
        <svg width="19" height="19" fill="currentColor" style={{marginBottom:"-2px", marginRight: "10px"}}>
          <path d="M5 8h10v2H5zm3.293 2.707L10 13.414l1.707-2.707L12.414 11H7.586l.707-.293z"></path>
        </svg>
        Get My Resume
      </a>
      <style jsx>{`
        .hero-animate {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          animation: fadeInTop .95s;
        }
        .gradient-name {
          background: linear-gradient(92deg,#00bfff 50%,#fff 99%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
        }
        .hero-desc {
          margin: 1rem 0 2rem;
          color: #b0b7c3;
          font-size: 1.2rem;
          text-align: center;
        }
        .button-link {
          display: inline-flex;
          gap: .8rem;
          align-items: center;
          font-weight: 600;
          background: #00bfff;
          color: #fff;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 6px 18px -4px #00bfff99;
          transition: transform .18s,box-shadow .2s, background .16s;
        }
        .button-link:hover {
          background: #0090cc;
          transform: scale(1.06);
          box-shadow: 0 12px 32px -8px #00e6ff99;
        }
        @keyframes fadeInTop {
          from { opacity: 0; transform: translateY(16px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </section>
  );
}
