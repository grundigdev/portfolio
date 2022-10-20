import React from 'react'
import './footer.css'

//import { FaFacebookF } from 'react-icons/fa'
//import { AiOutlineInstagram } from 'react-icons/ai'

import { BsLinkedin } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { BsReddit } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">GRUNDIGDEV</a>

      <ul className="permalinks">
        <li><a href="#">Start</a></li>
        <li><a href="#about">Über mich</a></li>
        <li><a href="#experience">Erfahrungen</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Referenzen</a></li>
        <li><a href="#contact">Kontakt</a></li>
        
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/marcel-grundig-537799253/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/grundigdev">
          <FiGithub />
        </a>
        <a href="https://twitter.com/grundigdev">
          <FiTwitter />
        </a>
        <a href="https://www.reddit.com/user/grundigdev">
          <BsReddit />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; grundigdev. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer