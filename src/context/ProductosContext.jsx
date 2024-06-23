import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ProductsContext = createContext()

const ProductosContext = ({children}) => {

const [product, setProduct] = useState([])

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await axios.get("http://localhost:8000/productos")
                setProduct(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        obtenerDatos();
    },[])
console.log(product, 'productos desde el context')
    
  return (
   
    <ProductsContext.Provider value={{product}}>
        {children}
    </ProductsContext.Provider>
  )
}

export default ProductosContext