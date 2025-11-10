import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
        I am a <span className={styles.highlight}>Computer Science undergrad</span> skilled in
        <span className={styles.highlight}> Python, JavaScript, C++, C </span>
        with hands-on experience in full-stack and <span className={styles.highlight}>machine learning</span> development.
        I've built ML solutions (Car Price Predictor, dashboards), modern web apps with
        <span className={styles.highlight}> React.js, Flask </span> and engineered real-time data tools as an intern at
        <span className={styles.highlight}> Appsquadz</span> and <span className={styles.highlight}>Geeta Technical Hub</span>.
        Certified in <span className={styles.highlight}>cybersecurity & ethical hacking</span>,
        I combine AI, backend systems, and clean UI to solve problems.
        Hackathon finalist, always eager to learn new tech!
      </p>
    </section>
  );
}
