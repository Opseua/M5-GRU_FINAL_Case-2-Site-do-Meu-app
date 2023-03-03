import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './style.css'
import logo from '../../assets/login/logo_circulo.jpg';

export default function Login() {
  return (
    <div class="login_box">
      <Navbar />



      <div class="brand_logo_container">
        <img src={logo} class="brand_logo" alt="Logo"></img>
      </div>

      {/* ################################################################### */}

      {/* Formulário: ACESSO / REDEFINIR SENHA / CADASTRO */}
      <form class="login_todos_os_formularios">

        {/*  Formulário: elemento 'TÍTULO' */}
        <h1 id="login_titulo">Acesso</h1>

        {/* Formulário: elementos do formulário 'ACESSO' */}
        <div id="login_form_acesso">

          <input class="login_input" id="login_acesso_email" type="text" name="usuario_email" placeholder="E-mail"></input>
          <input class="login_input" id="login_acesso_senha_1" type="password" name="usuario_senha_1" placeholder="Senha"></input>

        </div>

        {/* Formulário: elementos do formulário 'REDEFINIR SENHA' */}
        <div id="login_form_redefinir_senha">

          <input class="login_input" type="text" name="usuario_email" placeholder="E-mail*" required></input>
          <input class="login_input" type="text" name="usuario_reset_pergunta"
            placeholder="Pergunta de segurança*" required></input>
          <input class="login_input" type="text" name="usuario_reset_resposta" placeholder="Sua resposta*"
            required></input>
          <input class="login_input" type="password" name="usuario_senha_1" placeholder="Nova senha*" required></input>
          <input class="login_input" type="password" name="usuario_senha_2" placeholder="Confirmar senha*"
            required></input>

        </div>

        {/* Formulário: elementos do formulário 'CADASTRO' */}
        <div id="login_form_cadastre_se">

          <input class="login_input" type="text" name="usuario_nome" placeholder="Nome*" required></input>
          <input class="login_input" type="text" name="usuario_email" placeholder="E-mail*" required></input>
          <input class="login_input" type="password" name="usuario_senha_1" placeholder="Senha*" required></input>
          <input class="login_input" type="password" name="usuario_senha_2" placeholder="Confirmar senha*"
            required></input>
          <input class="login_input" type="text" name="usuario_genero" placeholder="Gênero"></input>
          <input class="login_input" type="text" name="usuario_nascimento" placeholder="Data de nascimento"
            required></input>
          <input class="login_input" type="text" name="usuario_peso" placeholder="Seu peso"></input>
          <input class="login_input" type="text" name="usuario_altura" placeholder="Sua altura"></input>
          <input class="login_input" type="text" name="usuario_tipo_sanguineo" placeholder="Seu tipo sanguíneo"></input>
          <input class="login_input" type="text" name="usuario_reset_pergunta"
            placeholder="Pergunta de segurança*" required></input>
          <input class="login_input" type="text" name="usuario_reset_resposta" placeholder="Sua resposta*"
            required></input>

        </div>

        {/*  Formulário: elemento botão 'ENTRAR' */}
        <input onclick="show_hide_e_dont_reload('login_botao_submit')" class="login_input" id="login_botao_submit"
          type="submit" name="Entrar" value="Entrar"></input>

        {/* Formulário: elemento botão 'VOLTAR' */}
        <input onclick="show_hide_e_dont_reload('login_botao_voltar')" class="login_input" id="login_botao_voltar"
          type="submit" name="Voltar" value="Voltar"></input>

        {/* Formulário: elementos botões 'REDEFINIR SENHA' e 'CADASTRE-SE' */}
        <div class="login_links">

          <input onclick="show_hide_e_dont_reload('login_botao_redefinir_senha')" class="login_input"
            id="login_botao_redefinir_senha" type="submit" name="Redefinir_senha" value="Redefinir senha"></input>

          <input onclick="show_hide_e_dont_reload('login_botao_cadastre_se')" class="login_input"
            id="login_botao_cadastre_se" type="submit" name="Cadastre_se" value="Cadastre-se"></input>

        </div>

      </form>




      <Footer />
    </div>
  );
}
