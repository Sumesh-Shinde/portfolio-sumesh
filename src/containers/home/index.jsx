import react from "react";
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import { FaDownload, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'; // Add FaFilePdf for resume icon
import '../home/styles.scss'

const Home = () => {
    const navigate = useNavigate();
    
    const handleNavigateToContactMePage = () => {
        navigate('/contact')
    }

    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello I'm Sumesh
                    <br />
                    Mern And Java Full Stack Developer
                </h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}
                end={{
                    transform: 'translatex(0px)'
                }}
            >
                <div className="home__contact-me">
                    {/* Hire Me Button */}
                    <button onClick={handleNavigateToContactMePage}>Hire Me</button>

                    {/* Social Media Links */}
                    <div className="social-links">
                        <a href="https://github.com/Sumesh-Shinde" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/sumesh-shinde-a469842a6?" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} className="social-icon" />
                        </a>
                        {/* Resume Icon */}
                        <a href="https://flowcv.com/resume/em7hh1rnrq" target="_blank" rel="noopener noreferrer">
                            <FaFilePdf size={30} className="social-icon" />
                        </a>
                    </div>
                </div>
            </Animate>
        </section>
    )
}

export default Home;
