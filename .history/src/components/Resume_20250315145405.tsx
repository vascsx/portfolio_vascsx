import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Resume.css';

const Resume: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Anderson Vasconcelos'; // Verifique que o texto aqui está correto

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Corrigir o erro ao adicionar os caracteres um por um
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index)); // Adicionando o caractere correto
        index += 1;
      } else {
        clearInterval(interval); // Parar o intervalo quando o texto estiver completo
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
    </div>
  );
};

export default Resume;
