import React from 'react';
import './Projects.css';
import { SiCypress, SiTypescript, SiGitlab, SiGithub, SiGooglechrome  } from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  description: string;
  icons: string[];
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

const socialIcons: { [key: string]: React.ReactNode } = {
  Web: SiGithub({ className: "social-icon" }),
  Github: SiGooglechrome({ className: "social-icon" }),
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Automação de Testes - Login",
    technologies: ["Cypress", "TypeScript"],
    icons: ["Github", "Web"],
    sourceCode: "https://github.com/username/vascsx",
    githubRepo: "https://github.com/username/vascsx",
    videoUrl: "https://youtu.be/YsqaNV0ft-I?si=rqnF7hSL9ZSqJpOe",
    description: "Projeto de automação de testes para a funcionalidade de login."
  },
  {
    id: 2,
    title: "Automação de Testes - API Rest",
    technologies: ["Cypress", "TypeScript"],
    icons: ["Github", "Web"],
    sourceCode: "https://github.com/username/vascsx",
    githubRepo: "https://github.com/username/vascsx",
    videoUrl: "https://youtu.be/YsqaNV0ft-I?si=rqnF7hSL9ZSqJpOe",
    description: "Automação de testes de uma API Rest, garantindo a integridade das respostas."
  },
  {
    id: 3,
    title: "Automação de Testes - Fluxo com API e Microserviço",
    technologies: ["Cypress", "TypeScript"],
    icons: ["Github", "Web"],
    sourceCode: "https://github.com/username/vascsx",
    githubRepo: "https://github.com/username/vascsx",
    videoUrl: "https://youtu.be/YsqaNV0ft-I?si=rqnF7hSL9ZSqJpOe",
    description: "Testes automatizados para um fluxo que integra uma API e microserviços."
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
      <div className="project-card" id="projects">
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p> {/* Exibindo a descrição dinamicamente */}
          <div className="tech-stack">
            {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
              {techIcons[tech]}
                  {tech}
            </span>
            ))}
          </div>
          <div className="project-buttons">
            {project.icons.map((icon) => (
                <a key={icon} href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                  {socialIcons[icon]}
                </a>
            ))}
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
