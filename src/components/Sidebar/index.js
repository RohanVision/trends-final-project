import './index.scss';
import { useState } from 'react';
import siteLogo from "../../assets/images/webverve-logo.png"
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className='nav-bar'>
            <Link className="logo" to='/' >
                <img src={siteLogo} alt='WebVerve' />
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="projects-link"
                    to="/projects"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ff0039"
                    size="3x"
                    className='close-icon' />
            </nav>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ff0039"
                size="3x"
                className='hamburger-icon' />
        </div>
    )

}

export default Sidebar;