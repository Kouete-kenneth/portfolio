import React, { useState } from 'react'
import './sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft, faArrowAltCircleRight, faBars, faEnvelope, faHome, faTimes, faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faSkype, faYoutube} from '@fortawesome/free-brands-svg-icons'

import LogoS from '../../Assets/images/my_logo11-02.svg'
import LogoSubtitle from '../../Assets/images/my_logo11-04.svg'
const Sidebar = () =>{
    const [isSideBarOpen, setisSideBarOpen] = useState(true);

  const showNavbar = () => {
    setisSideBarOpen(!isSideBarOpen);
  };
    return(
        <>
             <button onClick={showNavbar} className={isSideBarOpen ? 'sidebtn openbtn' : 'closebtn sidebtn'}>
                 <FontAwesomeIcon icon={isSideBarOpen? faArrowAltCircleLeft:faArrowAltCircleRight} />
            </button>
            <div className={isSideBarOpen ? 'side-bar bar-open' : 'side-bar bar-close'}>
        
        <Link className="logo" to="/">
            <img src={LogoS} alt="My Logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="Kenneth" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to="/About">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to="/Contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
           
        <ul>
            
            <li>
                <a href="https://www.linkedin.com/in/kouete-kenneth-737472200" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a href="https://github.com/Kouete-kenneth/portfolio" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a href=" https://m.facebook.com/friends/" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a href="https://www.google.com" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faGoogle} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a href="https://www.skype.com" target='_blank' rel='noreferer'>
                    <FontAwesomeIcon icon={faSkype} color='#4d4d4e'/>
                </a>
            </li>
            
        </ul>
    </div>
        </>
    );
}

export default Sidebar