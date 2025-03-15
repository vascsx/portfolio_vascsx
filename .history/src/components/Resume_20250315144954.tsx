import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Resume.css';

const Resume: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Anderson Vasconcelos';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Garantir que estamos acessando o caractere correto
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index += 1;
      } else {
        clearInterval(interval); // Parar o intervalo quando o texto completo for digitado
      }
    }, 100); // Velocidade da digitação

    return () => clearInterval(interval); // Limpar o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="resume">
      <div className="resume-header">
        <h1 className="title">
          <span className="prompt-icon">&gt;</span>
          <span>{text}</span>
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
