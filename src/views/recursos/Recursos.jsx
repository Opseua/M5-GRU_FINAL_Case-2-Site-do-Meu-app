import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';


function Recursos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://m5-gru-crud-api.cyclic.app/notas')
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div class="blocosN" key={item.nota_titulo}>
          <h2>{item.nota_titulo}</h2>
          <p class = "textos1">{item.nota_informacao}</p>
          <p>{item.nota_ultima_edicao}</p>
        </div>
      ))}
    </div>
  );
}

export default Recursos;