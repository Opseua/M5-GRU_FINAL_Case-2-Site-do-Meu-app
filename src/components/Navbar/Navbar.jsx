import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import MinhaImagem from  "../../views/login/imagens/logo_circulo.jpg";
import MinhaImagem2 from  "../../views/login/imagens/perfil.png";

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
        <img src={MinhaImagem} alt = "Minha imagem" style={{width: '100px'}}/>
        </Link>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/funcionalidades">Funcionalidades</Link>
            </li>
            <li>
              <Link to="/comunicados">Comunicados</Link>
            </li>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>

            <Link to="/teste">
              <button className="btn">Teste</button>
            </Link>
          
            <Link to="/perfil">   
            
  <img className="profile-pic" src={MinhaImagem2} alt="Minha imagem2" style={{ width: '100px' }} />
  
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
