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
          <p>At WebVerve, we are more than just a group of web developers—we are a passionate, dedicated team of innovators and problem-solvers. Our expertise spans the latest web technologies, ensuring that we deliver cutting-edge solutions that drive success for our clients.
          </p>

          <p>
            Every member of our team brings unique skills and perspectives to the table, allowing us to tackle any challenge with creativity and precision. Whether it's crafting seamless user experiences, building responsive websites, or developing complex applications, we work collaboratively to exceed expectations and bring your vision to life.
          </p>

          <p>
            We are committed to continuous learning and staying ahead of industry trends, so we can offer our clients the best solutions available. From the initial concept to the final deployment, we approach every project with the same enthusiasm and dedication, making sure that every detail is perfect.
          </p>

          <p>
            Let us help you turn your ideas into reality. Meet the team that is ready to make your digital dreams come true.
          </p>
        </div>
      </div >
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
    </div >
  );
}

export default About;
