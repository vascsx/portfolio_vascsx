import React from "react";
import "./Home.css";

const userData = {
    location: "Russas, CE",
    contact: [
        { name: "Email", url: "mailto:andersonvasconcelosprog@gmail.com" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/andersonvasconcelos17/" },
        { name: "GitHub", url: "https://github.com/vascsx" },
    ],
    resume: "/archives/anderson_vasconcelos.pdf",
    interests: ["Jogos", "Futmesa", "Programação", "Back-end"],
    education: "Universidade Federal do Ceará - Ciência da Computação",
    skills: ["C#", "SQL", "MongoDB", "RabbitMQ", "Redis", "ElasticSearch", "Kubernetes", "Cypress"],
};

const Home: React.FC = () => {
    return (
        <div className="terminal" id="home">
            <div className="terminal-header">
                <div className="dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                </div>
            </div>

            <div className="terminal-content">
                <CommandLine label="Vasc.currentLocation" output={userData.location} />

                <CommandLine label="Vasc.contactInfo">
                    [
                    {userData.contact.map(({ name, url }, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && ", "}
                            <a href={url} target="_blank" rel="noopener noreferrer">"{name}"</a>
                        </React.Fragment>
                    ))}
                    ]
                </CommandLine>

                <CommandLine label="Vasc.resume">
                    <a href={userData.resume} target="_blank" rel="noopener noreferrer">anderson_vasconcelos.pdf</a>
                </CommandLine>

                <CommandLine label="Vasc.interests" output={JSON.stringify(userData.interests)} />
                <CommandLine label="Vasc.education" output={userData.education} />
                <CommandLine label="Vasc.skills" output={JSON.stringify(userData.skills)} />

                <div className="command-line">
                    <span className="prompt-animation">&gt;</span>
                </div>
            </div>
        </div>
    );
};

interface CommandLineProps {
    label: string;
    output?: string;
    children?: React.ReactNode;
}

const CommandLine: React.FC<CommandLineProps> = ({ label, output, children }) => (
    <div className="command-line">
        <span className="prompt">&gt; {label}</span>
        <span className="output">{output || children}</span>
    </div>
);

export default Home;
