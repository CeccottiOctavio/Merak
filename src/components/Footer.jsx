import React from 'react'
import Style from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'

const  Footer = () => {
  return (
    <div>
        <footer className={Style.footer}>
            <p className={Style.insta}><FontAwesomeIcon icon={faInstagram} /> <a href="https://www.instagram.com/merakstudio2023/">MerakStudio2023</a></p>
            <p> &copy; 2023 Merak. Todos los derechos reservados.</p>
        </footer>
    </div>
  )
}

export default Footer