import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()

    useEffect(() => {
        const changeLetterClass = async () => {
            await new Promise(resolve => setTimeout(resolve, 4000));
            setLetterClass('text-animate-hover');
        };

        changeLetterClass();
    }, []);

    // EmailJS function
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    // EmailJS function

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'U', 's']} index={15} />
                    </h1>
                    <p>
                        Got a project in mind? We're here to help! Whether you need a new website, a redesign, or just want to say hi, feel free to reach out. Our team is ready to bring your vision to life.,
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Web Developer Team,
                    <br />
                    Toronto, CA,
                    <br />
                    King Street, 200
                    <span>Email: test@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[51.505, -0.09]} zoom={13} >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                You can visit our location anytime.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Contact;