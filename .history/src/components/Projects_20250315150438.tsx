import React from 'react';
import './Projects.css';
import portfolioImage from '../assets/images/portfolio.png'
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg'; // Importando o ícone do GitHu
import { ReactComponent as GitHubIcon } from '../assets/images/github-svgrepo-com.svg'; ; // Importando o ícone do GitHu

interface Project {
  id: number;
  title: string;
  image: string;
  technologies: string[];
  sourceCode: string;
  githubRepo: string; // Adicionando a URL do repositório do GitHub
  videoUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Vasc",
    image: portfolioImage,
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx",
    githubRepo: "https://github.com/username/vascsx", // URL do repositório GitHub
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Login",
    image: portfolioImage,
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx",
    githubRepo: "https://github.com/username/vascsx",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "API Rest",
    image: portfolioImage,
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx",
    githubRepo: "https://github.com/username/vascsx",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card" id="projects">
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>Descrição do projeto aqui.</p>
        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
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
            href={project.githubRepo}
            className="btn-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="github-icon" />
            GitHub
          </a>
        </div>
      </div>
      <div className="project-video">
        <iframe
          src={project.videoUrl}
          title={project.title}
          frameBorder="0"
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
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
