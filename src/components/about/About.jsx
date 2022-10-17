import React from 'react'
import './about.css'
import Bitmoji from '../../assets/avatar_test.PNG'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Lernen Sie mich kennen</h5>
      <h2>Über mich</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Bitmoji} alt="Über mich Bild" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Erfahrung</h5>
              <small>3+ Jahre</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Kunden</h5>
              <small>Aktuell: 0</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projekte</h5>
              <small>Aktuell: 1</small>
            </article>
          </div>
          <p>Ich bin Marcel und mache aktuell eine Ausbildung zum Fachinformatiker für Systemintegration. Nebenbei baue ich gerne Webseiten und stelle mich neuen Herausforderungen.</p>
          <a href="#contact" className="btn btn-primary">Kontakt</a>
        </div>
      </div>
    </section>
  )
}

export default About