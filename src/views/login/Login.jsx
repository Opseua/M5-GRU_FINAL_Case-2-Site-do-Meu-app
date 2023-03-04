import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import logo from './imagens/logo_circulo.jpg';
import { funcoes } from './funcoes.js';
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import sha1 from 'js-sha1';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;






export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);


  function botao_funcao(inf) {
    if (!(typeof inf === 'undefined')) {

      // Abrir link
      if (inf.match(/\//)) {
        navigate(inf)
      };

      // Consultar usuario
      if (inf.match(/consultar_usuario/)) {
        const email_form = funcoes.PegarPeloId("login_acesso_email");
        if ((typeof email_form === 'undefined') || !(email_form.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))) {
          alert("EMAIL INVÁLIDO!");
          return
        }
        const senha1_form = funcoes.PegarPeloId("login_acesso_senha_1");
        if ((typeof senha1_form === 'undefined') || !(senha1_form.length > 7)) {
          alert("SENHA NÃO CONTEM 8 CARACTERES!");
          return
        }

        setLoading(true);
        setTimeout(() => {
          axios
            .get(`https://m5-gru-crud-api.cyclic.app/usuarios/email=${email_form}`)
            .then((response) => {
              /* setData(response.data.data); */
              const resultado = response.data.data[0];
              const email_api = resultado.usuario_email;
              const senha1_api = resultado.usuario_senha;

              if (sha1(senha1_form) == senha1_api) {
                funcoes.DefinirVariavelLocal('usuario_id', resultado.usuario_id)
                /* alert(`SENHA OK | ID: ${funcoes.PegarVariavelLocal('usuario_id')} | Abrindo página de notas`); */
                botao_funcao("/sobre")
              }
              else {
                alert("SENHA INVALIDA")
              };

              setLoading(false);
            })
            .catch((error) => {
              alert("USUARIO NÃO CADASTRADO")
              console.log(error);
              setLoading(false);
            });
        }, 1);
      };

      // Botão voltar
      if (inf.match(/voltar_a_pagina/)) {

      }

    };
  }



  return (

    <div className="Sobre">
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "9999",
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader color={"#36D7B7"} loading={loading} css={override} size={150} />
        </div>
      )}

      {!loading && data && (
        /* #################### */
        <div>
          {/* ↓↓↓ NÃO APAGAR NEM USAR ESSA DIV ↓↓↓ */}
          <div className='nao_usar_essa_div'>&nbsp;</div>
          {/* ↑↑↑ NÃO APAGAR NEM USAR ESSA DIV ↑↑↑ */}


          {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ POR O CÓDIGO AQUI ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}

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
              <input onClick={() => { if (funcoes.BotaoSumit() == "botao_entrar") { botao_funcao("consultar_usuario") } }} className="login_input" id="login_botao_submit"
                type="submit" name="Entrar" value="Entrar"></input>

              {/* Formulário: elemento botão 'VOLTAR' */}
              <input onClick={() => { if (funcoes.BotaoSumit() == "botao_voltar") { botao_funcao("voltar_a_pagina") } }} className="login_input" id="login_botao_voltar"
                type="submit" name="Voltar" value="Voltar"></input>

              {/* Formulário: elementos botões 'REDEFINIR SENHA' e 'CADASTRE-SE' */}
              <div className="login_links">
                <input onClick={() => fetchData()} className="login_input"
                  id="login_botao_redefinir_senha" type="submit" name="Redefinir_senha" value="Redefinir senha"></input>

                <input onclick="show_hide_e_dont_reload('login_botao_cadastre_se')" className="login_input"
                  id="login_botao_cadastre_se" type="submit" name="Cadastre_se" value="Cadastre-se"></input>
              </div>
            </form>
          </div>

          {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ POR O CÓDIGO AQUI ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
        </div>
      )}
    </div>


  );
}








