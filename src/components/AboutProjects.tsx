import React, { useState } from 'react';
import './AboutProjects.css';
import projetoTestes from '../assets/images/apiswaager.png';

const AboutProjects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const highlights = [
    {
      id: 1,
      category: 'Robot',
      title: 'Projeto de automação de APIRest utilizando Robot Framework',
      description: 'Este projeto utiliza o Robot Framework para automação de APIs REST, garantindo integração contínua e testes confiáveis.',
      details: 'Este projeto demonstra como o Robot Framework foi utilizado para automatizar testes de APIs REST. Foram empregadas bibliotecas como RequestsLibrary, BuiltIn e Collections para criar testes robustos e reutilizáveis. A automação foi integrada com pipelines de CI/CD no GitLab, utilizando um ambiente dockerizado para garantir consistência e escalabilidade. A API foi desenvolvida com .NET 8, EntityFrameworkCore, Docker e SQL, proporcionando uma solução moderna e eficiente.',
      image: projetoTestes,
      icons: ['🤖', '📜', '⚙️'],
    },
    {
      id: 2,
      category: 'Selenium',
      title: 'Selenium com C#: Integração poderosa para automação de testes.',
      description: 'Automação de testes utilizando Selenium com C#, ideal para aplicações web robustas.',
      details: 'Este projeto explora como o Selenium foi integrado com C# para criar uma solução de automação eficiente e escalável. A abordagem inclui a criação de scripts de teste para aplicações web, garantindo cobertura de testes e confiabilidade. Além disso, foram implementadas boas práticas de design de testes e integração com ferramentas de CI/CD para execução automatizada.',
      image: projetoTestes,
      icons: ['🌐', '💻', '🔍'],
    },
    {
      id: 3,
      category: 'Cypress',
      title: 'Cypress: Testes end-to-end rápidos e confiáveis.',
      description: 'Cypress é uma ferramenta moderna para testes end-to-end, com foco em velocidade e confiabilidade.',
      details: 'Este projeto apresenta como o Cypress foi utilizado para criar testes end-to-end eficientes e confiáveis. A configuração incluiu a criação de cenários de teste abrangentes, com foco em desempenho e facilidade de manutenção. Além disso, foram exploradas integrações com ferramentas de CI/CD para execução contínua e relatórios detalhados de resultados.',
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
            <p>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutProjects;