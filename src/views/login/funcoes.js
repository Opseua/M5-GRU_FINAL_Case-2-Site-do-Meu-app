export const funcoes = {
  PegarPeloId: (ele_pegar) => {
    return document.getElementById(ele_pegar).value;
  },

  PegarPelaClass: (ele_pegar) => {
    return document.getElementsByClassName(ele_pegar)[0].value;
  },

  ImputarPeloId: (ele_imputar, valor) => {
    const elemento = document.getElementById(ele_imputar); // selecione o elemento usando o ID
    elemento.value = valor; // defina o valor desejado
    /* document.getElementById(ele_imputar).value = valor; */
  },

  ImputarPelaClass: async (ele_imputar, valor) => {
    document.getElementsByClassName(ele_imputar)[0].value = valor;
  },

  /* ################################################################################## */

  DefinirVariavelLocal: (nome_var, valor) => {
    window.localStorage.setItem(nome_var, valor)
  },

  PegarVariavelLocal: (nome_var) => {
    return window.localStorage.getItem(nome_var)
  },

  /* ################################################################################## */

  BotaoSumit: () => {
    const ele_botao = document.getElementById("login_botao_submit").value;
    // Na tela "Acesso" (checar se o email e senha do usuário existem)
    if ((ele_botao == "Entrar")) {
      return "botao_entrar";
    };
    if ((ele_botao == "Voltar")) {
      return "botao_voltar";
    }
  },

  BotaoRedefinirSenha: () => {
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






  /* ImputarPelaClass: async (ele_imputar, valor) => {
    document.getElementsByClassName(ele_imputar)[0].value = valor;
  } */

  /*   ImputarPelaClass: function (ele_imputar, valor) => {
      document.getElementsByClassName(ele_imputar)[0].value = valor;
    } */

}
