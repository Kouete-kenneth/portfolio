import React from 'react'
import CTA from './CTA'
import './home.scss'
import './anime'

import me from '../../Assets/images/portfolioPic.jpg'
import logo from '../../Assets/images/my_logo11-02.svg'
import Layout from '../Layout/layout'
import Loader from 'react-loaders'
const Home_page = () => {

  return (
    <div className="container home-page">
      <Loader type="pacman" />
      <div className="text-zone">
        <span className="GetSolution">Get Every Single Solution</span>
        <h1>
          Hello Welcome,
          <br /> I am, Kouete Kenneth <br />
          <img src={me} alt="kenneth" />
          <br />
          <span id="animation">Web Developper</span>
        </h1>
        <span className="impress">
          Frontend Developer / JavaScript Expert / Content Provider
        </span>
      </div>
      <div className="logozone">
        <div className="mylogo">
          <div>
            <img src={logo} alt="Kenneth Design" />
          </div>
        </div>
        <span href="#contact" className="scroll__down">
          <CTA />
        </span>
      </div>
    </div>
  )
}
export default Home_page
