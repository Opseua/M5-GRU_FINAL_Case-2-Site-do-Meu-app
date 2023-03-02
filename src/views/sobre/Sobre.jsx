import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './style.css'

export default function Sobre() {
  return (
    <div>
      <Navbar />


      <main>
        <section>
          <h2>Sobre o Bloco de Notas da Saúde</h2>
          <p>O Bloco de Notas da Saúde é uma ferramenta online gratuita para que você possa acompanhar sua saúde de forma fácil e organizada.</p>
          <p>Com o Bloco de Notas da Saúde, você pode registrar informações importantes sobre sua saúde, como:</p>
          <ul>
            <li>Medicamentos que está tomando</li>
            <li>Resultados de exames médicos</li>
            <li>Consultas médicas</li>
            <li>Alimentação e exercícios físicos</li>
            <li>Outras observações sobre sua saúde</li>
          </ul>
          <p>O Bloco de Notas da Saúde foi criado para ajudar você a cuidar melhor da sua saúde e a ter mais controle sobre suas informações médicas.</p>
        </section>
      </main>


      <Footer />
    </div>
  );
}
