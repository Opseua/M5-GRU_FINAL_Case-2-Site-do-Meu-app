import { HashRouter, Routes, Route } from "react-router-dom";
import Inicio from "./views/inicio/Inicio";
import Sobre from "./views/sobre/Sobre";
import Recursos from "./views/recursos/Recursos";
import Contatos from "./views/contatos/Contatos";
import Login from "./views/login/Login";
import GetNotas from "./views/getnotas/GetNotas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/recursos" element={<Recursos />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/get-notas" element={<GetNotas />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
