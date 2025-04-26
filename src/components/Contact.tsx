import React from "react";
import githubIcon from "../assets/images/github.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import "./Contact.css";

const socialLinks = [
    { href: "https://github.com/vascsx", icon: githubIcon, alt: "GitHub" },
    { href: "https://www.linkedin.com/in/andersonvasconcelos17", icon: linkedinIcon, alt: "LinkedIn" },
];

const Contact: React.FC = React.memo(() => {
    return (
        <section className="contact" id="contact">
            <h2>Contatos</h2>
            <div className="icons">
                {socialLinks.map(({ href, icon, alt }) => (
                    <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Link para ${alt}`}
                    >
                        <img src={icon} alt={`Ícone do ${alt}`} className="icon" />
                    </a>
                ))}
            </div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
            </footer>
        </section>
    );
});

export default Contact;
