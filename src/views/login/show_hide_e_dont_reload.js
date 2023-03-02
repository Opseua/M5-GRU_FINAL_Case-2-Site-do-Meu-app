
// Exibir e ocultar elemento
function show_hide_e_dont_reload(comando) {

  // Usando o botão 'Entrar'
  if ((comando == "login_botao_submit")) {
    const ele_botao = document.getElementById("login_botao_submit").value;

    // Na tela "Acesso" (checar se o email e senha do usuário existem)
    if ((ele_botao == "Entrar")) {
      alert("rodando");




      const asyncPostCall = async () => {
        try {
          const response = await fetch('https://m5-gru-crud-api.cyclic.app/usuarios', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          });
          const data = await response.json();
          // enter you logic when the fetch is successful
          alert(JSON.stringify(data))
          console.log(data);
        } catch (error) {
          // enter your logic for when there is an error (ex. error toast)
          alert("Nao rodou");
          console.log(error)
        }
      }

      asyncPostCall()





    }










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

  // Recarregar página
  /* window.location.reload(); */

}

module.exports = show_hide_e_dont_reload;






