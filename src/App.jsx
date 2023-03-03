import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Inicio from "./views/inicio/Inicio";
import Sobre from "./views/sobre/Sobre";
import Recursos from "./views/recursos/Recursos";
import Login from "./views/login/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/recursos" element={<Recursos />} />
      <Route path="/login" element={<Login />} />
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
