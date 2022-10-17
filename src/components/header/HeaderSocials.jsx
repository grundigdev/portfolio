import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiGitlab } from 'react-icons/fi'
import { BsReddit } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/marcel-grundig-537799253/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/grundigdev" target="_blank"><FiGithub /></a>
        <a href="https://gitlab.com/grundigdev" target="_blank"><FiGitlab /></a>
        <a href="https://twitter.com/grundigdev" target="_blank"><FiTwitter /></a>
        <a href="https://www.reddit.com/user/grundigdev" target="_blank"><BsReddit /></a>
    </div>
  )
}

export default HeaderSocials