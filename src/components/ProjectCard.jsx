'use client';
export default function ProjectCard({ title, desc, github, tech = [] }) {
  return (
    <div className="project-card">
      <h3 className="project-gradient">{title}</h3>
      <p style={{color: '#ccc', marginBottom: '0.9rem'}}>{desc}</p>
      <div style={{
        display: 'flex', gap: '0.7rem', alignItems: 'center',
        marginBottom: '1rem', flexWrap:'wrap'
      }}>
        {tech.map((t, i) => (
          <img
            key={i}
            src={t.logo}
            alt={t.name}
            title={t.name}
            className="tech-icon"
          />
        ))}
      </div>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="card-btn"
      >
        GitHub ↗
      </a>
      <style jsx>{`
        .project-card {
          background: #191924;
          padding: 1.7rem 1.3rem;
          border-radius: 14px;
          border: 1px solid #222;
          min-height: 220px;
          box-shadow: 0 4px 20px -8px #00bfff15;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform .13s, box-shadow .17s;
        }
        .project-card:hover {
          transform: scale(1.037);
          box-shadow: 0 14px 40px -12px #00e6ff33;
        }
        .project-gradient {
          background: linear-gradient(92deg,#00bfff 60%,#fff 99%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: .5rem;
        }
        .tech-icon {
          width: 27px;
          height: 27px;
          filter: brightness(0.9) invert(1);
          opacity: 0.92;
          border-radius: 7px;
          background: #1a1a24;
        }
        .card-btn {
          margin-top: auto;
          align-self: flex-start;
          background: #00bfff;
          color: white;
          padding: .45rem 1.15rem;
          border-radius: 7px;
          text-decoration: none;
          font-weight: 700;
          font-size: .97rem;
          transition: background .18s,box-shadow .18s;
        }
        .card-btn:hover {
          background: #0090cc;
        }
      `}</style>
    </div>
  );
}
