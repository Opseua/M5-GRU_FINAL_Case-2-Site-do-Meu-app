import React from "react";
import './style.css';
import Texto from './Texto';
import imagem1 from './imagens/1.png';
import imagem2 from './imagens/2.png';
import imagem3 from './imagens/3.png';


function Inicio() {


  return (
    <div className="mainFrame_inicio">


      <div className="minhasfotos">

        <img className="imagem-card" src={imagem1} alt="imagem1" />

        <img className="imagem-card" src={imagem2} alt="imagem2" />

        <img className="imagem-card" src={imagem3} alt="imagem3" />

      </div>


      <div class="texto_inicio">
        <Texto />
      </div>

    </div>
  )

}

export default Inicio;

