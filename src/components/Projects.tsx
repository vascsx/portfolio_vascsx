import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import projetoImage from '../assets/images/apiswaager.png';
const Projects: React.FC = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      image: projetoImage,
      date: 'Sábado, 23 abril 2025',
      title: 'Automação de API utilizando Robot Framework',
      description: 'Projeto de automação de API utilizando Robot Framework, com integração contínua e testes automatizados.',
      tags: ['Robot Framework', '.NET', 'Docker'],
      videoLink: 'https://link-to-video.com',
    },
    {
      id: 2,
      image: projetoImage,
      date: 'Sábado, 23 abril 2025',
      title: 'Automação de API utilizando Robot Framework',
      description: 'Projeto de automação de API utilizando Robot Framework, com integração contínua e testes automatizados.',
      tags: ['Robot Framework', '.NET', 'Docker'],
      videoLink: 'https://link-to-video.com',
    },
    {
      id: 3,
      image: projetoImage,
      date: 'Sábado, 23 abril 2025',
      title: 'Automação de API utilizando Robot Framework',
      description: 'Projeto de automação de API utilizando Robot Framework, com integração contínua e testes automatizados.',
      tags: ['Robot Framework', '.NET', 'Docker'],
      videoLink: 'https://link-to-video.com',
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h2>Projetos</h2>
      <section className="projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <p className="project-date">{project.date}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>
                <div className="buttons">
                  <button
                    className="video-button"
                    onClick={() => window.open(project.videoLink, '_blank')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.79 5.093a.5.5 0 0 1 .5 0l4.5 2.6a.5.5 0 0 1 0 .866l-4.5 2.6a.5.5 0 0 1-.75-.433V5.526a.5.5 0 0 1 .25-.433z" />
                      <path d="M14 4.5a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 2 4.5v7a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-7zM1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5v-7z" />
                    </svg>
                    Vídeo do Projeto
                  </button>
                  <button
                    className="blog-button"
                    onClick={() => navigate('/blog')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2z" />
                      <path d="M2.5 3.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM4 4h8v1H4V4zm0 2h8v1H4V6zm0 2h8v1H4V8z" />
                    </svg>
                    Sobre o Projeto
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;