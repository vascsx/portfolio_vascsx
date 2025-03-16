import React from "react";
import githubIcon from "../assets/images/github-svgrepo-com.svg";
import linkedinIcon from "../assets/images/linkedin-svgrepo-com.svg";
import "./Contact.css";

const socialLinks = [
    { href: "https://github.com/vascsx", icon: githubIcon, alt: "GitHub" },
    { href: "https://www.linkedin.com/in/andersonvasconcelos17", icon: linkedinIcon, alt: "LinkedIn" },
];

const Contact: React.FC = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contatos</h2>
            <div className="icons">
                {socialLinks.map(({ href, icon, alt }, index) => (
                    <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                        <img src={icon} alt={`Ícone do ${alt}`} className="icon" />
                    </a>
                ))}
            </div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
            </footer>
        </section>
    );
};

export default Contact;
