import React, { useState } from 'react';
import './BlogHome.css';
import projetoTestes from '../assets/images/apiswaager.png';

const BlogHome: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const highlights = [
    {
      id: 1,
      category: 'Robot',
      title: 'Projeto de automação de APIRest utilizando Robot Framework',
      description: 'Este projeto utiliza o Robot Framework para automação de APIs REST, garantindo integração contínua e testes confiáveis.',
      image: projetoTestes,
      icons: ['🤖', '📜', '⚙️'],
    },
    {
      id: 2,
      category: 'Selenium',
      title: 'Selenium com C#: Integração poderosa para automação de testes.',
      description: 'Automação de testes utilizando Selenium com C#, ideal para aplicações web robustas.',
      image: projetoTestes,
      icons: ['🌐', '💻', '🔍'],
    },
    {
      id: 3,
      category: 'Cypress',
      title: 'Cypress: Testes end-to-end rápidos e confiáveis.',
      description: 'Cypress é uma ferramenta moderna para testes end-to-end, com foco em velocidade e confiabilidade.',
      image: projetoTestes,
      icons: ['🚀', '🧪', '✅'],
    },
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="blog-home-container">
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
      <main className="highlights">
        {highlights.map((item) => (
          <div className="highlight-card" key={item.id}>
            <img src={item.image} alt={item.category} />
            <div className="highlight-content">
              <span className="category">{item.category}</span>
              <h2>{item.title}</h2>
              <div className="icons-technologies">
                {item.icons.map((icon, index) => (
                  <span key={index} className="icon">
                    {icon}
                  </span>
                ))}
                <button className="read-button" onClick={() => openModal(item)}>
                  Read
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <img src={selectedProject.image} alt={selectedProject.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogHome;