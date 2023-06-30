import React, { useRef, useState } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faBrain, faHeartCirclePlus, faProjectDiagram, faServer, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
        <button onClick={showNavbar} className="navbtn closebtn">
            <FontAwesomeIcon icon={isNavOpen? faTimes:faBars} /> Menu
        </button>
      <nav className={isNavOpen ? 'nav-bar nav-open' : 'nav-bar closebtn'}>
        
        <div>
            <NavLink exact={true} activeClassName="active" to="/Experience">
           <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
            </NavLink>
        </div>
        <div>
            <NavLink exact={true} activeClassName="active" className="Services-link" to="/Services">
                <FontAwesomeIcon icon={faServer} color="#4d4d4e" />
            </NavLink>
        </div>
        <div>
            <NavLink exact={true} activeClassName="active" className="Testimonials-link" to="/Testimonial">
                <FontAwesomeIcon icon={faHeartCirclePlus} color="#4d4d4e" />
            </NavLink>
        </div>
        <div>
            <NavLink exact={true} activeClassName="active" className="Skills-link" to="/Skills">
                 <FontAwesomeIcon icon={faBrain} color="#4d4d4e" />
            </NavLink>
        </div>
        <div>
            <NavLink exact={true} activeClassName="active" className="Project-link" to="/Projects">
            <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
            </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;