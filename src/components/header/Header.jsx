import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Bitmoji from '../../assets/avatar_test.PNG'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hallo ich bin</h5>
        <h1>Marcel Grundig</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Bitmoji} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Herunter Scrollen</a>
      </div>
    </header>
  )
}

export default Header