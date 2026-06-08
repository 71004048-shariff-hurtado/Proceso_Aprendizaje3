import {Routes, Route} from "react-router-dom";
import CursosDelEstudiante from "./pages/CursosDelEstudiante";
import CatalogoCursos from "./pages/CatalogoCursos";
import Usuario from "./components/Usuario";
import Navbar from "./components/Navbar";


export default function App() {
  return (
   <>
   <Navbar></Navbar>
   <Routes>
   <Route path="/" element={<CursosDelEstudiante></CursosDelEstudiante>}>Cursos del estudiante</Route>
   <Route path="/catalogocursos" element={<CatalogoCursos></CatalogoCursos>}>Catalogo de cursos</Route>
   <Route path="/usuario" element={<Usuario></Usuario>}>Usuarios</Route>
   </Routes>
   </>
  );
}

// Dentro de  return();    se coloca lo que se va mostrar al usuario (lo que va retornar)



// Desde ahora para trabajar con paginas dentro del navegador se abre el archivo main.jsx que está en la carpeta src.

