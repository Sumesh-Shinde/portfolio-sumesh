import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './utils.js/particles'; // Import the configuration
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import NavBar from './components/navBar';

function App() {
    const handleInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="App">

            {/* NavBar */}
            <NavBar />
            {/* Particles */}
            <Particles id="particles" options={particlesConfig} init={handleInit} />
            {/* Main Page Content */}
            <div className='App__main-page-content'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>

        </div>
    );
}

export default App;
