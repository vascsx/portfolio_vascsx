import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Resume.css';

const Resume: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Anderson Vasconcelos'; // Texto correto

  useEffect(() => {
    let index = 0;
    
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]); // Atualiza o texto com o caractere correto
      index += 1;

      // Verifica se o índice alcançou o comprimento total do texto
      if (index === fullText.length) {
        clearInterval(interval); // Interrompe o intervalo quando o texto completo for exibido
      }
    }, 100); // Velocidade da digitação (100ms por caractere)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []); // O efeito é executado apenas uma vez ao montar o componente

  return (
    <div className="resume">
      <div className="resume-header">
        <h1 className="title">
          <span className="prompt-icon">&gt;</span>
          <span>{text}</span> {/* Exibe o texto enquanto está sendo digitado */}
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
