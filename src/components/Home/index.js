import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/text-icon.png';
import Logo from '../Logo';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'b'];
    const jobArray = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    // // On Hover Bounce Effect
    // const myFunction = async () => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }

    // useEffect(() => {
    //     myFunction();
    // }, [])
    // // On Hover Bounce Effect

    useEffect(() => {
        const changeLetterClass = async () => {
            await new Promise(resolve => setTimeout(resolve, 4000));
            setLetterClass('text-animate-hover');
        };

        changeLetterClass();
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}> W </span>
                    <span className={`${letterClass} _14`}> e </span>
                    <span className={`${letterClass} _15`}>'r </span>
                    <span className={`${letterClass} _16`}> e</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={17} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={24} />
                </h1>

                <h2>Frontend Developer / Backend Developer / AWS / Github / TailwindCSS</h2>
                <Link to="/contact" className="flat-button">Contact Us</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home;