// Impedir recarregamento da página e enviar formulário
function submit_dont_reload(id_formulario) {

    var form = document.getElementById(id_formulario);
    function handleForm(event) { event.preventDefault(); button() }
    form.addEventListener('submit', handleForm);
    
    // Recarregar página
    /* window.location.reload(); */

}

module.exports = submit_dont_reload;

