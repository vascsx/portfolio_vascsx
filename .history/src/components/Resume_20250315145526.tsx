import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Resume.css';

const Resume: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Anderson Vasconcelos'; // Verifique se o texto está correto aqui

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
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
