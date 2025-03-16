import React from 'react';
import githubIcon from '../assets/images/github-svgrepo-com.svg'; 
import linkedinIcon from '../assets/images/linkedin-svgrepo-com.svg'; 
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact" id={"contact"}>
      <h2>Contatos</h2>
      <div className="icons">
        <a href="https://github.com/vascsx" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="ícone do github" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/andersonvasconcelos17" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="ícone do linkedin" className="icon" />
        </a>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Contact;
