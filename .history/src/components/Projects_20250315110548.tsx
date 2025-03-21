import React from 'react';
import './Projects.css';
import portfolioImage from '../assets/images/portfolio.png';

interface Project {
  id: number;
  title: string;
  image: string;
  technologies: string[];
  sourceCode: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Vasc",
    image: portfolioImage,
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx"
  },
  {
    id: 2,
    title: "Login",
    image: portfolioImage,
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx"
  },
  {
    id: 3,
    title: "API Rest",
    image: portfolioImage,
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card" id='projects' >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-content">
            <h3>{project.title}</h3>
            <div className="tech-stack">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a 
              href={project.sourceCode} 
              className="btn-source" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver Projeto
            </a>
          </div>
        </div>
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
