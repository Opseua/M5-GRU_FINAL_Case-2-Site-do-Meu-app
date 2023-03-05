import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Inicio from "./views/inicio/Inicio";
import Sobre from "./views/sobre/Sobre";
import Funcionalidades from "./views/funcionalidades/Funcionalidades";
import Comunicados from "./views/comunicados/comunicados";
import Login from "./views/login/Login";
import Teste from "./views/teste/Teste";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/funcionalidades" element={<Funcionalidades />} />
      <Route path="/comunicados" element={<Comunicados />} />
      <Route path="/login" element={<Login />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <Navbar />
      <body>
        <App />
      </body>
      <Footer />
    </HashRouter>
  );
}
