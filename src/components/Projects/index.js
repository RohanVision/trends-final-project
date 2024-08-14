import { useEffect, useState } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import piImage from '../../assets/images/pi.png'
import projectImage from '../../assets/images/project-2.jpg'
import codeCraftImage from '../../assets/images/codecrafter.jpg'

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const changeLetterClass = async () => {
            await new Promise(resolve => setTimeout(resolve, 4000));
            setLetterClass('text-animate-hover');
        };

        changeLetterClass();
    }, []);

    const [projects] = useState([
        {
            title: 'PI-Institute',
            description: 'A web application that allows users to manage assigments and increase productivity.',
            imageSrc: piImage,
            liveDemo: '#',
            sourceCode: 'https://github.com/kaushalkoladiya'
        },
        {
            title: 'The Great Homes',
            description: 'An Real Estate website with a user-friendly interface and Mortgage Calculator system.',
            imageSrc: projectImage,
            liveDemo: '#',
            sourceCode: 'https://github.com/RohanVision'
        },
        {
            title: 'CodeCrafters',
            description: 'An E-commerce stationary with a user-friendly interface and secure payment system.',
            imageSrc: codeCraftImage,
            liveDemo: '#',
            sourceCode: 'https://github.com/kaushalkoladiya'
        }
    ]);

    return (
        <div className="container projects-page">
            <div className='left-container'>

                <div className="text-zone">
                    <h1><AnimatedLetters letterClass={letterClass} strArray={['O', 'U', 'R', ' ', 'P', 'R', 'O ', 'J', 'E', 'C', 'T', 'S']} index={15} /></h1>
                    <p>We take pride in delivering top-notch projects that push the boundaries of web development. Here are some of the projects we’ve worked on:</p>
                </div>
            </div>
            <div className='right-container'>
                <div className="projects-section">
                    {projects.map((projects, index) => (
                        <div className="project-card" key={index}>
                            <img src={projects.imageSrc} alt={projects.title} className="project-pic" />
                            <h2>{projects.title}</h2>
                            <p>{projects.description}</p>
                            <div className="project-links">
                                <a href={projects.liveDemo} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                                </a>
                                <a href={projects.sourceCode} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faCode} /> Source Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
