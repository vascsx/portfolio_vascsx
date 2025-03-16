import React from 'react';
import './Projects.css';
import { ReactComponent as GitHubIcon } from '../assets/images/github-svgrepo-com.svg';
import { SiCypress, SiTypescript, SiGitlab } from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  technologies: string[];
  sourceCode: string;
  githubRepo: string;
  videoUrl: string;
}

const techIcons: { [key: string]: React.ReactNode } = {
  Cypress: SiCypress({ className: "tech-icon" }),
  TypeScript: SiTypescript({ className: "tech-icon" }),
  GitLab: SiGitlab({ className: "tech-icon" }),
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Automação de Testes - Login",
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx",
    githubRepo: "https://github.com/username/vascsx",
    videoUrl: "https://youtu.be/YsqaNV0ft-I?si=rqnF7hSL9ZSqJpOe"
  },
  {
    id: 2,
    title: "Automação de Testes - API Rest",
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx",
    githubRepo: "https://github.com/username/vascsx",
    videoUrl: "https://youtu.be/YsqaNV0ft-I?si=rqnF7hSL9ZSqJpOe"
  },
  {
    id: 3,
    title: "Automação de Testes - Fluxo com API e Microserviço",
    technologies: ["Cypress", "TypeScript"],
    sourceCode: "https://github.com/username/vascsx",
    githubRepo: "https://github.com/username/vascsx",
    videoUrl: "https://youtu.be/YsqaNV0ft-I?si=rqnF7hSL9ZSqJpOe"
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
              {techIcons[tech]}
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
              Web
            </a>
            <a
                href={project.githubRepo}
                className="btn-github"
                target="_blank"
                rel="noopener noreferrer"
            >
              <GitHubIcon className="github-icon" />
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
      <section className="projects" id={"projects"}>
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
