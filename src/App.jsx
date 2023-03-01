import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Recursos from "./Pages/Recursos";
import Contatos from "./Pages/Contatos";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/recursos" element={<Recursos />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/login" element={<Login />} />
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
