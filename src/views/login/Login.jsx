import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './style.css';
import logo from './imagens/logo_circulo.jpg';

import { Audio } from 'react-loader-spinner';





export default function Login() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);


  function botao_funcao(inf) {

    if (inf.match(/\//)) {
      navigate(inf)
    };

    if (!inf.match(/\//)) {
      alert("Definir o elemento")
    };
  };


  async function fetchData() {
    alert("1");
    setIsLoading(true);
    const response = await fetch('https://m5-gru-crud-api.cyclic.app/adm/sobre');
    const data = await response.json();
    setIsLoading(false);
    // processar os dados retornados pela API
  }


  return (




    <div className="login_box">



      <div className="brand_logo_container">
        <img src={logo} className="brand_logo" alt="Logo"></img>
      </div>

      {/* ################################################################### */}

      {/* Formulário: ACESSO / REDEFINIR SENHA / CADASTRO */}

      <form className="login_todos_os_formularios">

        {/*  Formulário: elemento 'TÍTULO' */}
        <h1 className="login_h1" id="login_titulo">Acesso</h1>

        {/* Formulário: elementos do formulário 'ACESSO' */}
        <div id="login_form_acesso">

          <input className="login_input" id="login_acesso_email" type="text" name="usuario_email" placeholder="E-mail"></input>
          <input className="login_input" id="login_acesso_senha_1" type="password" name="usuario_senha_1" placeholder="Senha"></input>

        </div>

        {/* Formulário: elementos do formulário 'REDEFINIR SENHA' */}
        <div id="login_form_redefinir_senha">

          <input className="login_input" type="text" name="usuario_email" placeholder="E-mail*" required></input>
          <input className="login_input" type="text" name="usuario_reset_pergunta"
            placeholder="Pergunta de segurança*" required></input>
          <input className="login_input" type="text" name="usuario_reset_resposta" placeholder="Sua resposta*"
            required></input>
          <input className="login_input" type="password" name="usuario_senha_1" placeholder="Nova senha*" required></input>
          <input className="login_input" type="password" name="usuario_senha_2" placeholder="Confirmar senha*"
            required></input>

        </div>

        {/* Formulário: elementos do formulário 'CADASTRO' */}
        <div id="login_form_cadastre_se">

          <input className="login_input" type="text" name="usuario_nome" placeholder="Nome*" required></input>
          <input className="login_input" type="text" name="usuario_email" placeholder="E-mail*" required></input>
          <input className="login_input" type="password" name="usuario_senha_1" placeholder="Senha*" required></input>
          <input className="login_input" type="password" name="usuario_senha_2" placeholder="Confirmar senha*"
            required></input>
          <input className="login_input" type="text" name="usuario_genero" placeholder="Gênero"></input>
          <input className="login_input" type="text" name="usuario_nascimento" placeholder="Data de nascimento"
            required></input>
          <input className="login_input" type="text" name="usuario_peso" placeholder="Seu peso"></input>
          <input className="login_input" type="text" name="usuario_altura" placeholder="Sua altura"></input>
          <input className="login_input" type="text" name="usuario_tipo_sanguineo" placeholder="Seu tipo sanguíneo"></input>
          <input className="login_input" type="text" name="usuario_reset_pergunta"
            placeholder="Pergunta de segurança*" required></input>
          <input className="login_input" type="text" name="usuario_reset_resposta" placeholder="Sua resposta*"
            required></input>

        </div>

        {/*  Formulário: elemento botão 'ENTRAR' */}
        <input onClick={() => fetchData("/get-notas")} className="login_input" id="login_botao_submit"
          type="submit" name="Entrar" value="Entrar"></input>

        {/* Formulário: elemento botão 'VOLTAR' */}
        <input className="login_input" id="login_botao_voltar"
          type="submit" name="Voltar" value="Voltar"></input>

        {/* Formulário: elementos botões 'REDEFINIR SENHA' e 'CADASTRE-SE' */}
        <div className="login_links">

          <input onclick="show_hide_e_dont_reload('login_botao_redefinir_senha')" className="login_input"
            id="login_botao_redefinir_senha" type="submit" name="Redefinir_senha" value="Redefinir senha"></input>

          <input onclick="show_hide_e_dont_reload('login_botao_cadastre_se')" className="login_input"
            id="login_botao_cadastre_se" type="submit" name="Cadastre_se" value="Cadastre-se"></input>

        </div>

      </form>



    </div>

  );
}



