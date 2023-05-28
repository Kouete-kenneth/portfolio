import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook, faBrain, faHeartCirclePlus, faProjectDiagram, faServer} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () =>{
    return(
    <div className='nav-bar'>
        <nav>
            <NavLink exact='true' activeclassname='active' to="/Experience">
                <FontAwesomeIcon icon={faBook} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='Services-link' to="/Services">
                <FontAwesomeIcon icon={faServer} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='Testimonials-link' to="/Testimonials">
                <FontAwesomeIcon icon={faHeartCirclePlus} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='Skills-link' to="/Skills">
                <FontAwesomeIcon icon={faBrain} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='Project-link' to="/Projects">
                <FontAwesomeIcon icon={faProjectDiagram} color='#4d4d4e'/>
            </NavLink>
        </nav>
    </div>);
}

export default Sidebar