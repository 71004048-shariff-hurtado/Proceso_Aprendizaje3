import { Routes, Route } from "react-router-dom";
import { CursosProvider } from "./context/CursosContext";
import CursosDelEstudiante from "./pages/CursosDelEstudiante";
import CatalogoCursos from "./pages/CatalogoCursos";
import Usuario from "./components/Usuario";
import Navbar from "./components/Navbar";
import './App.css';

export default function App() {
  return (
    <CursosProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<CursosDelEstudiante />} />
        <Route path="/catalogocursos" element={<CatalogoCursos />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </CursosProvider>
  );
}

/*
COMENTARIOS DE LA APLICACIÓN:

Estructura Global:
- ✓ CursosProvider envuelve toda la aplicación
- ✓ Contexto API disponible en todos los componentes
- ✓ React Router configurado con 3 rutas principales
- ✓ Navbar es persistente en todas las vistas

Rutas disponibles:
- "/" → CursosDelEstudiante (HOME - Mis Inscripciones)
- "/catalogocursos" → CatalogoCursos (Catálogo con filtros)
- "/usuario" → Usuario (Perfil del estudiante)

Navegación SPA:
- Sin recarga de página entre vistas
- Cambio fluido de contenido
- Menú responsivo en móviles
*/

