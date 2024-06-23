import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ProductsContext = createContext()

const ProductosContext = ({ children }) => {

    const [product, setProduct] = useState([])

    // GET
    const obtenerDatos = async () => {
        try {
            const response = await axios.get("http://localhost:8000/productos")
            setProduct(response.data)
        } catch (error) {
            console.error(error)
        }
    }

     // POST
    const addProducto = async (producto) => {
        try {
            const response = await axios.post('http://localhost:8000/productos', producto)
            setProduct([...product, response.data])
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        obtenerDatos()
    }, [])

    console.log(product, 'productos desde el context')

   

    return (

        <ProductsContext.Provider value={{ product, addProducto }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductosContext


