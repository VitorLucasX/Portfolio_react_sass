import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      <a href="https://www.linkedin.com/in/vitor-araujodev/"
       className='social-btn'><FaLinkedinIn className='linkedin'/>
       </a>
      <a href="https://github.com/VitorLucasX"
       className='social-btn'><FaGithub className='github' />
       </a>
      <a href="https://www.instagram.com/vitor.lucasz/"
       className='social-btn'><FaInstagram className='instagram' />
       </a>
    </section>
  )
}

export default SocialNetworks
