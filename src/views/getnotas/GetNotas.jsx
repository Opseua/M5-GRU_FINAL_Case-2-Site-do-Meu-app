import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function GetNotas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://m5-gru-crud-api.cyclic.app/usuarios')
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />
      {data.map(item => (
        <div key={item.usuario_nome}>
          <h2>{item.usuario_nome}</h2>
          <p>{item.usuario_email}</p>
          <p>{item.usuario_reset_resposta}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default GetNotas;