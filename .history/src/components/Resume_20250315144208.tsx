import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <div className="resume-header">
        <h1 className="title">
          <span className="prompt-icon">&gt;</span> 
          <Typewriter
            textStyle={{ fontFamily: 'Fira Code', fontSize: '48px', color: '#2180df' }}
            startDelay={500}
            cursorColor="#8b8eff"
            multiText={['Anderson Vasconcelos']}
            multiTextDelay={1000}
            typeSpeed={100}
            backSpeed={50}
            backDelay={500}
            loop={false}
          />
        </h1>
      </div>
      <div className="resume-content">
        <p className="description">
          Sou Analista de Qualidade, com experiência em testes de software no setor financeiro englobando fluxos de pagamentos, como Boleto, CNAB e entre outros.
        </p>
        <p className="sub-description">
          Confira meus <Link to="projects" smooth={true} duration={500} className="link">projetos</Link> abaixo.
        </p>
      </div>
    </div>
  );
};

export default Resume;
