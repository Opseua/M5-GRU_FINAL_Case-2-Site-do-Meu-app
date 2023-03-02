import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetNotas.css';


function GetNotas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://m5-gru-crud-api.cyclic.app/notas')
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />
      {data.map(item => (
        <div class="blocosN" key={item.nota_titulo}>
          <h2>{item.nota_titulo}</h2>
          <p class = "textos1">{item.nota_informacao}</p>
          <p>{item.nota_ultima_edicao}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default GetNotas;