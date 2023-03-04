const fetchWithHeaders = require('./script1.js');

async function main() {
    const url = 'https://m5-gru-crud-api.cyclic.app/adm/funcionalidades';
    const headers = {
        'Authorization': 'Bearer my-token',
        'Content-Type': 'application/json'
    };

    const data = await fetchWithHeaders(url, headers);
    console.log(data);
    console.log("2")
}


