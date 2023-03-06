import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import MinhaImagem from "../../views/login/imagens/logo_circulo.jpg";
import MinhaImagem2 from "../../views/perfil/imagens/perfil_circulo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          <img src={MinhaImagem} alt="Minha imagem" style={{ width: '80px' }} />
        </Link>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li id="navbar_botao_inicio">
              <Link to="/">Início</Link>
            </li>

            <li id="navbar_botao_sobre">
              <Link to="/sobre">Sobre</Link>
            </li>

            <li id="navbar_botao_funcionalidades">
              <Link to="/funcionalidades">Funcionalidades</Link>
            </li>

            <li id="navbar_botao_comunicados">
              <Link to="/comunicados">Comunicados</Link>
            </li>

            <Link to="/login">
              <button id="navbar_botao_login" className="btn">Login</button>
            </Link>

            <Link to="/post">
              <button id="navbar_botao_criar_nota" className="btn">Criar nota</button>
            </Link>

            <Link to="/perfil">
              <img id="navbar_botao_perfil" className="profile-pic" src={MinhaImagem2} alt="Minha imagem2" style={{ width: '80px', height: '80px' }} />
            </Link>
          </ul>

        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}
