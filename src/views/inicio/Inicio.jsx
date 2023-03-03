import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './style.css';
import Texto from './Texto';


function Inicio() {


  return ( 
    <div className="mainFrame">
      <Navbar />
      {/*teste*/}

      <div className="minhasfotos">

        <img className="imagem-card" src="../src/views/inicio/Imagem/1.png" alt="imagem1" />

        <img className="imagem-card" src="../src/views/inicio/Imagem/2.png" alt="imagem2" />

        <img className="imagem-card" src="../src/views/inicio/Imagem/3.png" alt="imagem3" />

      </div>


      <div class="texto_inicio">
       <Texto/>
      </div>

      <Footer />
    </div>
  )

}

export default Inicio;


