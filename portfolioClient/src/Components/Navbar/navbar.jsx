import React from 'react'
import './navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook, faEnvelope, faHeartCirclePlus, faHome, faServer, faSpinner, faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faServicestack, faSkype, faYoutube} from '@fortawesome/free-brands-svg-icons'

import LogoS from '../../Assets/images/my_logo11-02.svg'
import LogoSubtitle from '../../Assets/images/my_logo11-04.svg'
const Sidebar = () =>{
    return(<div className='nav-bar'>
        <nav>
            <NavLink exact='true' activeclassname='active' to="/">
                <FontAwesomeIcon icon={faBook} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='Services-link' to="/About">
                <FontAwesomeIcon icon={faServer} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='Testimonials-link' to="/Contact">
                <FontAwesomeIcon icon={faHeartCirclePlus} color='#4d4d4e'/>
            </NavLink>
        </nav>
    </div>);
}

export default Sidebar