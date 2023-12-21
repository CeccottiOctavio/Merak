import React, { useRef } from 'react';
import img from '../image/llamativa.png';
import img2 from '../image/llamativa2.png';
import Style from "./Main.module.css";
import pack1 from '../image/pack1.png';
import pack2 from '../image/pack2.png';
import pack3 from '../image/pack3.png';
import pack4 from '../image/pack4.png';
import pack5 from '../image/pack5.png';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_bx0bcgc', 'template_yvfk5ve', e.target, 'DEUyXt-Vt_TATK0Nw')
            .then((result) => {
                console.log(result.text);
                if (form.current) {
                    form.current.reset();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <a className={Style.btnWsp} target='Blank' href="https://api.whatsapp.com/send?phone=31611596169">
                <i className={Style.iconWsp}><FontAwesomeIcon icon={faWhatsapp} /></i>
            </a>
            <div className={Style.containerImg}>
                <img className={Style.image} src={img} alt="Bienvenidos" />
                <img className={Style.image2} src={img2} alt="Bienvenidos" />
            </div>

            <div>
                <h2 id='Servicios' className={Style.branding}>Branding</h2>
                <div className={Style.containerPack}>
                    <a href="../Pack1"><img className={Style.pack1} src={pack1} alt="Pack1" /></a>
                    <a href="../Pack2"><img className={Style.pack1} src={pack2} alt="pack2" /></a>
                    <a href="../Pack3"><img className={Style.pack1} src={pack3} alt="pack3" /></a>
                </div>
                <h2 className={Style.branding}>Desarrollo Web</h2>
                <div className={Style.containerPack}>
                    <a href="../Pack4"><img className={Style.pack1} src={pack4} alt="pack4" /></a>
                    <a href="../Pack5"><img className={Style.pack1} src={pack5} alt="pack5" /></a>
                </div>
            </div>

            <div id='Contacto' className={Style.contacto}>
                <h2>Contactos</h2>
            </div>

            <div className={Style.contact0}>
                <div className={Style.contactForm}>
                    <form onSubmit={sendEmail} ref={form}>
                        <p>
                            <label>Nombre</label>
                            <input required={true} name="user_name" type="text" />
                        </p>
                        <p>
                            <label>Email</label>
                            <input required={true} name="user_email" type="email" />
                        </p>
                        <p>
                            <label>Móvil (opcional)</label>
                            <input name='movil' type="tel" />
                        </p>
                        <p>
                            <label>Asunto (opcional)</label>
                            <input name='asunto' type="text" />
                        </p>
                        <p className={Style.block}>
                            <label>Mensaje</label>
                            <textarea required={true} name="message"></textarea>
                        </p>
                        <p className={Style.block}>
                            <button type='submit'>Enviar</button>
                        </p>
                    </form>
                </div>
                <div className={Style.contactInfo}>
                    <h4>Mas Info</h4>
                    <ul>
                        <li><i><FontAwesomeIcon icon={faLocationDot} /> Barcelona</i></li>
                        <li><i><FontAwesomeIcon icon={faPhone} /> +34 611 870565</i></li>
                        <li><FontAwesomeIcon icon={faInstagram} /> <a target='Blank' href="https://www.instagram.com/merakstudio2023/">MerakStudio2023</a></li>
                    </ul>
                    <p>
                        Estamos aquí para convertir tus ideas en experiencias visuales cautivadoras y funcionales.
                        ¿Listo para dar vida a tu presencia en línea?
                    </p>
                    <p>Antonella y Octavio</p>
                </div>
            </div>
        </div>
    );
};
export default Main;
