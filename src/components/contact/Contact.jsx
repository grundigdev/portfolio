import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Lass uns connecten</h5>
      <h2>Kontakt</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>E-Mail</h4>
            <h5>grundigdev@gmail.com</h5>
            <a href="mailto:grundigdev@gmail.com" target="_blank">Sende eine Nachricht</a>
          </article>
          <article className="contact__option">
            <AiOutlineInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>@grundigdev</h5>
            <a href="https://instagram.com/" target="_blank">Sende eine Nachricht</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+49 7845637182</h5>
            <a href="htpps://api.whatsapp.com/send?phone=512321">Sende eine Nachricht</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Dein voller Name" required />
          <input type="email" name="email" placeholder="Deine E-Mail" required />
          <textarea name="message" rows="7" placeholder="Deine Nachricht"></textarea>
          <button type="submit" class="btn btn-primary">Sende eine Nachricht</button>
        </form>
      </div>
    </section>
  )
}

export default Contact