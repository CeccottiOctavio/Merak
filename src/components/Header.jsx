import React, { useState, useEffect } from 'react';
import Style from '../components/Header.module.css';
import Logo from '../image/MERAK.png';

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleMenu = () => {
    setNavVisible((prevNavVisible) => !prevNavVisible);
    setBurgerMenuOpen((prevBurgerMenuOpen) => !prevBurgerMenuOpen);
  };

  const closeMenu = () => {
    setNavVisible(false);
    setBurgerMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      document.getElementById('nav').style.top = `${scrollTop}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = burgerMenuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [burgerMenuOpen]);

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Iceland&family=Lora&family=Montserrat:wght@100&family=Old+Standard+TT&family=Open+Sans:wght@300;400;700&family=Vidaloka&family=Cinzel&display=swap"
        rel="stylesheet"
      />

      <p className={Style.mensaje}>Diseño Gráfico y Desarrollo web para el mundo! ♥</p>
      <div className={Style.logoContainer}>
        <img className={Style.logo} src={Logo} alt="LOGO" />
      </div>
      <div className={Style.fixed}>
        <button
          className={`${Style.abrirMenu} ${Style.burgerIcon} ${burgerMenuOpen ? Style.visible : ''}`}
          id="abrir"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <nav
        id="nav"
        className={`${Style.nav} ${navVisible || burgerMenuOpen ? Style.visible : ''}`}
      >
        <button className={Style.cerrarMenu} id="cerrar" onClick={toggleMenu}>
          ╳
        </button>
        <ul className={Style.List}>
          <li>
            <a href="/" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="/#Servicios" onClick={closeMenu}>
              Servicios
            </a>
          </li>
          <li>
            <a className={Style.aContact} href="#Contacto" onClick={closeMenu}>
              Contactos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
