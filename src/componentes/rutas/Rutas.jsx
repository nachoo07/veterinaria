import { Routes, Route } from "react-router-dom"
import Home from "../../paginas/Home"
import Producto from "../../paginas/productos/Producto"
import Administrador from "../../paginas/admin/Administrador"

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/producto" element={<Producto/>}/>
        <Route path="/Administrador" element={<Administrador/>}/>
        <Route path="*" element={<h1>not found</h1>}/>
    </Routes>
    </>
  )
}

export default Rutas