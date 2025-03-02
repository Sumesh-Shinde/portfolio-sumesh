import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaDownload, FaGithub, FaLinkedin, FaFilePdf, FaWhatsapp } from 'react-icons/fa';
import resume from '../home/Sumesh Shinde 8766924531.pdf';
import '../home/styles.scss';

const Home = () => {
    const navigate = useNavigate();
    
    const handleNavigateToContactMePage = () => {
        navigate('/contact');
    };

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = "Sumesh_Shinde_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <Animate play duration={1.5} delay={0.5} start={{ opacity: 0, transform: 'translateY(-20px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}>
                    <h1 className="home__name" style={{ opacity: 1, transform: 'translateY(0)' }}>Hello, I'm <span className="highlight">Sumesh</span></h1>
                </Animate>
                <Animate play duration={1.5} delay={1} start={{ opacity: 0, transform: 'translateY(-20px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}>
                    <h2 className="home__profession" style={{ opacity: 1, transform: 'translateY(0)' }}>MERN and Java Full Stack Developer</h2>
                </Animate>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1.5}
                start={{ opacity: 0, transform: 'translateY(20px)' }}
                end={{ opacity: 1, transform: 'translateY(0)' }}
            >
                <div className="home__buttons">
                    <button onClick={handleNavigateToContactMePage} className="hire-me">Hire Me</button>
                    <button onClick={handleDownloadResume} className="download-resume">
                        <FaDownload size={20} /> Download Resume
                    </button>
                </div>

                <div className="home__social-links">
                    <a href="https://github.com/Sumesh-Shinde" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/sumesh-shinde-a469842a6?" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} className="social-icon" />
                    </a>
                    <a href="https://flowcv.com/resume/em7hh1rnrq" target="_blank" rel="noopener noreferrer">
                        <FaFilePdf size={30} className="social-icon" />
                    </a>
                    <a href="https://wa.me/919503641102" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} className="social-icon" />
                    </a>
                </div>
            </Animate>
        </section>
    );
};

export default Home;