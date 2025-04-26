import React, { useState } from 'react';
import './AboutProjects.css';
import projetoTestes from '../assets/images/apiswaager.png';

// Tipagem para os projetos
type Project = {
  id: number;
  category: string;
  title: string;
  description: string;
  details: string;
  image: string;
  icons: string[];
};

// Dados dos projetos
const projectData: Project[] = [
  {
    id: 1,
    category: 'Robot',
    title: 'Projeto de automação de APIRest utilizando Robot Framework',
    description: 'Este projeto utiliza o Robot Framework para automação de APIs REST, garantindo integração contínua e testes confiáveis.',
    details: 'Este projeto demonstra como o Robot Framework foi utilizado para automatizar testes de APIs REST.',
    image: projetoTestes,
    icons: ['🤖'],
  },
  {
    id: 2,
    category: 'Selenium',
    title: 'Selenium com C#: Integração poderosa para automação de testes.',
    description: 'Automação de testes utilizando Selenium com C#, ideal para aplicações web robustas.',
    details: 'Este projeto explora como o Selenium foi integrado com C# para criar uma solução de automação eficiente.',
    image: projetoTestes,
    icons: ['🌐'],
  },
  {
    id: 3,
    category: 'Cypress',
    title: 'Cypress: Testes end-to-end rápidos e confiáveis.',
    description: 'Cypress é uma ferramenta moderna para testes end-to-end, com foco em velocidade e confiabilidade.',
    details: 'Este projeto apresenta como o Cypress foi utilizado para criar testes end-to-end eficientes e confiáveis.',
    image: projetoTestes,
    icons: ['🚀'],
  },
];

// Componente para o cabeçalho
const Header: React.FC = () => (
  <header className="blog-home-header">
    <h1>Vasc Automation</h1>
    <nav>
      <ul className="categories">
        <li>Robot</li>
        <li>Cypress</li>
        <li>Selenium</li>
        <li>Appium</li>
      </ul>
    </nav>
  </header>
);

// Componente para o card de destaque
const HighlightCard: React.FC<{
  project: Project;
  onReadMore: (project: Project) => void;
}> = ({ project, onReadMore }) => (
  <div className="highlight-card">
    <img src={project.image} alt={project.category} />
    <div className="highlight-content">
      <span className="category">{project.category}</span>
      <h2>{project.title}</h2>
      <div className="icon-and-button">
        <span className="icons">{project.icons[0]}</span>
        <button className="read-button" onClick={() => onReadMore(project)}>
          Read
        </button>
      </div>
    </div>
  </div>
);

// Componente para o modal
const Modal: React.FC<{
  project: Project;
  onClose: () => void;
}> = ({ project, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>{project.title}</h2>
      <p>{project.details}</p>
    </div>
  </div>
);

// Componente principal
const AboutProjects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="blog-home-container">
      <Header />
      <main className="highlights">
        {projectData.map((project) => (
          <HighlightCard
            key={project.id}
            project={project}
            onReadMore={openModal}
          />
        ))}
      </main>
      {isModalOpen && selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default AboutProjects;