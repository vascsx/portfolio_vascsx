import React from 'react';
import './Home.css';

const Navbar: React.FC = () => {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="dots">
          <div className="dot dot-red"></div>
          <div className="dot dot-yellow"></div>
          <div className="dot dot-green"></div>
        </div>
      </div>
      <div className="terminal-content">
        <div className="command-line">
          <span className="prompt">&gt; Vasc.currentLocation</span>
          <span className="output">"Russas, CE"</span>
        </div>
        <div className="command-line">
          <span className="prompt">&gt; Vasc.contactInfo</span>
          <span className="output">
            [
              <a href="mailto:andersonvasconcelosprog@gmail.com">"andersonvasconcelosprog@gmail.com"</a>, 
              <a href="https://www.linkedin.com/in/andersonvasconcelos17/" target="_blank" rel="noopener noreferrer">"LinkedIn"</a>, 
              <a href="https://github.com/vascsx" target="_blank" rel="noopener noreferrer">"github"</a>
            ]
          </span>
        </div>
        <div className="command-line">
          <span className="prompt">&gt; Vasc.resume</span>
          <span className="output">
            <a href="/path/to/vasc.pdf" target="_blank" rel="noopener noreferrer">"vasc.pdf"</a>
          </span>
        </div>
        <div className="command-line">
          <span className="prompt">&gt; Vasc.interests</span>
          <span className="output">["Jogos", "Futmesa", "Programação", "Back-end"]</span>
        </div>
        <div className="command-line">
          <span className="prompt">&gt; Vasc.education</span>
          <span className="output">"Universidade Federal do Ceará - Ciência da Computação"</span>
        </div>
        <div className="command-line">
          <span className="prompt">&gt; Vasc.skills</span>
          <span className="output">["C#", "SQL", "MongoDB", "RabbitMQ", "Redis", "ElasticSearch", "Kubernetes", "Cypress"]</span>
        </div>
        <div className="command-line">
          <span className="prompt-animation">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
