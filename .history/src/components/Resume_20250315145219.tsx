import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Resume.css';

const Resume: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Anderson Vasconcelos'; // Confirme que o texto está correto aqui

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      console.log(`Index: ${index}, Text: ${text}`); // Para depuração, verifique como o texto e o índice estão mudando
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index)); // Adiciona o caractere correto
        index += 1;
      } else {
        clearInterval(interval); // Interrompe o intervalo quando o texto completo for exibido
      }
    }, 100); // A velocidade de digitação

    return () => clearInterval(interval); // Limpeza do intervalo quando o componente for desmontado
  }, []); // Dependências vazias para rodar uma única vez ao montar

  return (
    <div className="resume">
      <div className="resume-header">
        <h1 className="title">
          <span className="prompt-icon">&gt;</span>
          <span>{text}</span> {/* Exibe o texto que está sendo escrito */}
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
