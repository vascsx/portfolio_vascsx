import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <div className="resume-header">
        <h1 className="title">
          <span className="prompt-icon">&gt;</span> Anderson Vasconcelos
          <span className="cursor"></span>
        </h1>
      </div>
      <div className="resume-content">
        <p className="description">
          Sou Analista de Qualidade, com experiência em testes de software no setor financeiro englobando fluxos de pagamentos, como Boleto, CNAB e entre outros.
        </p>
        <p className="sub-description">
          Confira meus <a href="#projects" className="link">side-projects</a> abaixo.
        </p>
      </div>
    </div>
  );
};

export default Resume;
