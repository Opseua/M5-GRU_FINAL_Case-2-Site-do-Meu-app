// Exibir e ocultar elemento
function show_hide_e_dont_reload(comando) {

  // Usando o botão 'Entrar'
  if ((comando == "login_botao_submit")) {

    alert("ROTA: abrir a página de notas");

    var form = document.getElementById(id_formulario);
    function handleForm(event) { event.preventDefault(); button() }
    form.addEventListener('submit', handleForm);

    // Recarregar página
    /* window.location.reload(); */

  }

  // Usando o botão 'Redefinir senha'
  if ((comando == "login_botao_redefinir_senha")) {

    // Alterar texto
    document.getElementById("login_titulo").innerHTML = "Recuperar acesso";
    document.getElementById("login_botao_submit").value = "Alterar senha";

    // Ocultar
    document.getElementById("login_form_acesso").style.display = "none";
    document.getElementById("login_form_cadastre_se").style.display = "none";
    document.getElementById("login_botao_redefinir_senha").style.display = "none";
    document.getElementById("login_botao_cadastre_se").style.display = "none";

    // Mostrar
    document.getElementById("login_form_redefinir_senha").style.display = "block";
    document.getElementById("login_botao_voltar").style.display = "block";

  }

  // Usando o botão 'Cadastre-se'
  if ((comando == "login_botao_cadastre_se")) {

    // Alterar texto
    document.getElementById("login_titulo").innerHTML = "Cadastro";
    document.getElementById("login_botao_submit").value = "Confirmar";

    // Ocultar
    document.getElementById("login_form_acesso").style.display = "none";
    document.getElementById("login_form_redefinir_senha").style.display = "none";
    document.getElementById("login_botao_redefinir_senha").style.display = "none";
    document.getElementById("login_botao_cadastre_se").style.display = "none";

    // Mostrar
    document.getElementById("login_form_cadastre_se").style.display = "block";
    document.getElementById("login_botao_voltar").style.display = "block";

  }

  // Usando o botão 'Voltar'
  if ((comando == "login_botao_voltar")) {

    // Alterar texto
    document.getElementById("login_titulo").innerHTML = "Acesso";
    document.getElementById("login_botao_submit").value = "Entrar";

    // Ocultar
    document.getElementById("login_form_redefinir_senha").style.display = "none";
    document.getElementById("login_form_cadastre_se").style.display = "none";
    document.getElementById("login_botao_voltar").style.display = "none";
    
    // Mostrar
    document.getElementById("login_form_acesso").style.display = "block";
    document.getElementById("login_botao_redefinir_senha").style.display = "block";
    document.getElementById("login_botao_cadastre_se").style.display = "block";

  }





  /* alert(`${elemento} - ${comando}`); */

}

module.exports = show_hide_e_dont_reload;




