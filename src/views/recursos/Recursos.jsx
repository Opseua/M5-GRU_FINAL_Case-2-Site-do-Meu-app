import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function Recursos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://m5-gru-crud-api.cyclic.app/adm/funcionalidades')
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div className="blocosN" key={item.funcionalidade_titulo}>
          <h2>{item.funcionalidade_titulo}</h2>
          <p className="textos1">{item.funcionalidade_descricao}</p>
          <p className="p">{item.nota_ultima_descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default Recursos;
