import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const changeLetterClass = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000));
      setLetterClass('text-animate-hover');
    };

    changeLetterClass();
  }, []);

  const teamMembers = [
    {
      name: 'Rohan Amberkar',
      role: 'Frontend Developer',
      bio: 'Rohan is an expert in React and CSS with a passion for creating intuitive user interfaces.',
      imageSrc: '/rohan.jpg',
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'Kaushal Koladiya',
      role: 'Full-stack Developer',
      bio: 'Kaushal specializes in Node.js and database management, ensuring smooth server-side operations.',
      imageSrc: '/kaushal.png',
      linkedin: 'https://www.linkedin.com/in/kaushalkoladiya/',
      github: 'https://github.com/kaushalkoladiya',
      twitter: 'https://x.com/kaushalkoladiya'
    },
    {
      name: 'Sanjana Domadiya',
      role: 'UI/UX Designer',
      bio: 'Sanjana designs beautiful and user-friendly interfaces, focusing on enhancing user experience.',
      imageSrc: '/sanjana.jpg',
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'Utsavkumar Padariya',
      role: 'DevOps Engineer',
      bio: 'Utsavkumar manages our infrastructure, ensuring that our applications run smoothly and efficiently.',
      imageSrc: '/utsav.jpg',
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  ];

  return (
    <div className="container about-page">
      <div className='left-container'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'U', 's']} index={15} />
          </h1>
          <p>Meet the team that makes everything possible. We are passionate, dedicated, and ready to tackle any challenge.</p>
        </div>
      </div>
      <div className='right-container'>
        <div className="team-section">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.imageSrc} alt={member.name} className="profile-pic" />
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.bio}</p>
              <div className="social-links">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} color="#0077b5" />
                </a>
                <a href={member.github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} color="#fff" />
                </a>
                <a href={member.twitter} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
