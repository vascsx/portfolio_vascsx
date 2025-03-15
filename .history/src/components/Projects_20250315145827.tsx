import React from 'react';
import './Projects.css';
import portfolioImage from '../assets/images/portfolio.png';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  sourceCode: string;
  videoUrl: string; // URL do vídeo do YouTube
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Vasc",
    description: "A personal portfolio to showcase my projects and skills.",
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Exemplo de URL do YouTube
  },
  {
    id: 2,
    title: "Login",
    description: "A login page built using TypeScript and Cypress.",
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Exemplo de URL do YouTube
  },
  {
    id: 3,
    title: "API Rest",
    description: "A simple REST API built with Node.js and Express.",
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Exemplo de URL do YouTube
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card" id='projects'>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-buttons">
          <a 
            href={project.sourceCode} 
            className="btn-source" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ver Projeto
          </a>
          <a 
            href={project.sourceCode} 
            className="btn-source" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Código Fonte
          </a>
        </div>
      </div>
      <div className="project-video">
        <iframe
          width="100%"
          height="100%"
          src={project.videoUrl}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
