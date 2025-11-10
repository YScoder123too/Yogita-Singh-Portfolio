import styles from '../styles/Projects.module.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Car Price Prediction using ML",
    desc: "A machine learning project that predicts car resale prices based on various features. Built with Python, Flask backend, and deployed using HTML5 & CSS3 frontend.",
    github: "https://github.com/yourusername/car-price-prediction",
    tech: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ]
  },
  {
    title: "Personal Portfolio (React)",
    desc: "Personal portfolio web app built with React, styled using React-Bootstrap and Animate.css. Fully responsive, fast, and animated single-page site.",
    github: "https://github.com/YScoder123too/my-portfolio",
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "React-Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Animate.css", logo: "https://raw.githubusercontent.com/daneden/animate.css/main/docs/_media/icon.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ]
  },
  {
    title: "Resume Maker AI Assistant",
    desc: "An AI-powered chatbot for resume-related queries and insights, featuring resume content analysis. Built with Gradio, OpenAI API, and Hugging Face.",
    github: "https://github.com/YScoder123too/resume-maker",
    tech: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Gradio", logo: "https://avatars.githubusercontent.com/u/58122364?s=200&v=4" },
      { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenAI_Logo.svg" },
      { name: "Hugging Face", logo: "https://avatars.githubusercontent.com/u/33094423?s=200&v=4" }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{textAlign:'center'}}>
      <h2 style={{ color: '#00bfff', marginBottom: '2rem' }}>Projects</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        justifyContent: 'center'
      }}>
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
}
