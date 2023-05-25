import './contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animate'
import { useEffect, useState, React } from 'react'
const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
            i'm interested in freelance opportunities -- especially software
            related development or Projects. However, if you have other request
            or question, don't Hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li>
                  <input
                    className="half"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    require
                  />
                </li>
                <li>
                  <input
                    className="half"
                    type="email"
                    name="email"
                    placeholder="example.gmail.com"
                    require
                  />
                </li>
                <li>
                  <input
                    className="half"
                    type="text"
                    name="subject"
                    placeholder="short Subject"
                    require
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    required
                    cols="30"
                    rows="10"
                    placeholder="Enter you message here"
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="Send" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
