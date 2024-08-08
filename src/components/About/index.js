import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import profilePic from '../../assets/images/profile.jpg';
import './index.scss';

const AboutUs = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const teamArray = ['O', 'u', 'r', ' ', 'T', 'e', 'a', 'm'];
    const historyArray = ['O', 'u', 'r', ' ', 'H', 'i', 's', 't', 'o', 'r', 'y'];

    useEffect(() => {
        const changeLetterClass = async () => {
            await new Promise(resolve => setTimeout(resolve, 4000));
            setLetterClass('text-animate-hover');
        };

        changeLetterClass();
    }, []);

    return (
        <div className="container about-us-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>A</span>
                    <span className={`${letterClass} _12`}>b</span>
                    <span className={`${letterClass} _13`}>o</span>
                    <span className={`${letterClass} _14`}>u</span>
                    <span className={`${letterClass} _15`}>t</span>
                    <span className={`${letterClass} _16`}> </span>
                    <span className={`${letterClass} _17`}>U</span>
                    <span className={`${letterClass} _18`}>s</span>
                    <br />
                </h1>

                <div className="team-section">
                    <h2><AnimatedLetters letterClass={letterClass} strArray={teamArray} index={20} /></h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src={profilePic} alt="Rohan" />
                            <h3>Rohan - CEO & Founder</h3>
                            <p>Rohan has over 10 years of experience in the tech industry, specializing in full-stack development and project management.</p>
                        </div>
                        <div className="team-member">
                            <img src={profilePic} alt="Kaushal" />
                            <h3>Kaushal - Lead Developer</h3>
                            <p>Kaushal is a highly skilled developer with expertise in both frontend and backend technologies, leading the development team to success.</p>
                        </div>
                        <div className="team-member">
                            <img src={profilePic} alt="Sanjana" />
                            <h3>Sanjana - UX/UI Designer</h3>
                            <p>Sanjana is responsible for creating intuitive and user-friendly designs that enhance the user experience across all platforms.</p>
                        </div>
                        <div className="team-member">
                            <img src={profilePic} alt="Utsav" />
                            <h3>Utsav - Project Manager</h3>
                            <p>Utsav ensures that all projects are delivered on time and meet the highest standards of quality, coordinating between clients and the team.</p>
                        </div>
                    </div>

                    <h2><AnimatedLetters letterClass={letterClass} strArray={historyArray} index={25} /></h2>
                    <p>
                        Welcome to our portfolio website! We are a passionate team of professionals dedicated to delivering high-quality web solutions. Our mission is to create innovative and impactful digital experiences that drive success for our clients.
                    </p>
                    <p>
                        Our company was founded in 2023 with the vision to provide cutting-edge web development services. Over the years, we have grown from a small startup to a thriving team of experts in frontend and backend development, design, and project management. Our commitment to excellence has earned us a reputation for delivering projects on time and within budget.
                    </p>
                </div>

                <Link to="/contact" className="flat-button">Contact Us</Link>
            </div>
        </div>
    )
}

export default AboutUs;
