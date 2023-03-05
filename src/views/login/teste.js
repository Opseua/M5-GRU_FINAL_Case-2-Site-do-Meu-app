var axios = require('axios');


var axios = require('axios');
var data = JSON.stringify({
    "usuario_id": 5,
    "usuario_nome": "aaaa",
    "usuario_genero": "Feminino",
    "usuario_nascimento": "2005-05-05T00:00:00.000Z",
    "usuario_peso": "72.3",
    "usuario_altura": "1.84",
    "usuario_tipo_sanguineo": "AB-",
    "usuario_imc": "17.94",
    "usuario_email": "priscila@gmail.com",
    "usuario_senha": "fd694ac520a7f5124e9d360822d3e58c577802a7",
    "usuario_reset_pergunta": "Nome do pai?",
    "usuario_reset_resposta": "Rogerio",
    "usuario_extra": "{\"inf_1\":\"Essa é a informação adicional 1\",\"inf_2\":\"Essa é a informação adicional 2\",\"inf_3\":\"Essa é a informação adicional 3\"}",
    "usuario_status": "on"
});

var config = {
    method: 'put',
    url: 'https://m5-gru-crud-api.cyclic.app/usuarios/5',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
