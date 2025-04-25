import React from 'react';
import { FaVideo, FaBlog } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
    const projects = [
        {
            id: 1,
            image: 'path/to/image1.jpg',
            date: 'Sábado, 23 abril 2025',
            title: 'Automação de API utilizando Robot Framework',
            description: 'Projeto de automação de API utilizando Robot Framework, com integração contínua e testes automatizados.',
            tags: ['Robot Framework', '.NET', 'Docker'],
            videoLink: 'https://link-to-video.com',
            blogLink: 'https://link-to-blog.com',
        },
    ];

    return (
        <div className="projects-container" id="projects">
            <h2>Projetos</h2>
            <header className="projects-header"></header>
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
                                        <span>{<FaVideo />}</span> Vídeo do Projeto
                                    </button>
                                    <button
                                        className="blog-button"
                                        onClick={() => window.open(project.blogLink, '_blank')}
                                    >
                                        <span>{<FaBlog />}</span> Link do Blog
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