
const axios = require('axios');


function teste() {


var axios = require('axios');
var data = JSON.stringify({
  "usuario_nome": "Orlando",
  "usuario_genero": "Masculino",
  "usuario_nascimento": "2020-03-04",
  "usuario_peso": "50",
  "usuario_altura": "1.78",
  "usuario_tipo_sanguineo": "A+",
  "usuario_imc": "20",
  "usuario_email": "opseua@gmail.com",
  "usuario_senha": "12345678",
  "usuario_reset_pergunta": "Perguta",
  "usuario_reset_resposta": "Resposta",
  "usuario_extra": "Extra"
});

var config = {
  method: 'put',
  url: 'https://m5-gru-crud-api.cyclic.app/usuarios/3',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}
teste()