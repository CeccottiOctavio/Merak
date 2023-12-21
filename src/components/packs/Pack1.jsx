// Pack1.jsx
import React from 'react';
import Style from '../packs/Packs.module.css';

const Pack1 = () => {
  return (
    <>
      
        <div>
          <h1>Pack Basico</h1>
          <p className={Style.frasePack}>TU HISTORIA, TU MARCA</p>
          <p className={Style.textPack}>En este pack, creamos el logotipo que refleja tu esencia. <br />
           Comenzamos con una propuesta inicial, ajustándola según tu feedback. <br />
            Te entregamos un Brandboard completo con paleta de colores y fuentes. <br />
             Además, recibirás los archivos en .ai, .jpg y .png, todo enviado directamente a tu correo electrónico para mayor comodidad. <br />
              Este pack es la base esencial para dar vida a tu marca.</p>
        </div>
      
    </>
  );
}

export default Pack1;
