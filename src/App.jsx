import Navegador from "./componentes/navegador/Navegador"
import Rutas from "./componentes/rutas/Rutas"
import ProductosContext from "./context/ProductosContext"
import Home from "./paginas/Home"



function App() {

  return (
    <>
    <ProductosContext>
      <Navegador/>
      <Rutas/>
      </ProductosContext>
    </>
  )
}

export default App
