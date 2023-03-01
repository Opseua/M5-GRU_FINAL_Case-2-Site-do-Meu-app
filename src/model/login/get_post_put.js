
    function API(){
    
    
    
    const asyncPostCall = async () => {
        alert("2");
        try {
            const response = await fetch('https://m5-gru-crud-api.cyclic.app/usuarios', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            // enter you logic when the fetch is successful
            console.log(data);
        } catch (error) {
            // enter your logic for when there is an error (ex. error toast)

            console.log(error)
        }
    }

    asyncPostCall()


}


module.exports = API;

