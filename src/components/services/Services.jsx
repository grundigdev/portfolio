import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>Was ich anbiete</h5>
      <h2>Services</h2>

      <div className="container container__services">
        <article className="service">
          <div className="service__head">
            <h3>Single Page Webanwendung</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Eine einzelne Seite ohne Routing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ohne Datenbank</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ohne dynamische Inhalte</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Multi Page Webanwendun </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mehrere Seiten mit Routing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mit Datenbank</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dynamische Inhalte</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Verwaltung Domain / E-Mail</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Webhosting auf Anbieterwahl</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Vollwertige Webanwendungen</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Webanwendung mit seperaten Front- & Backend</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Backend: Django</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend: React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Datensicherung mit Datenbank</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dynamisch gerenderte Inhalte</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Admin Panel mit Django Admin</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services