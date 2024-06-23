import { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { ProductsContext } from '../../context/ProductosContext';
import {v4 as uuidv4} from 'uuid'
import Swal from 'sweetalert2';

const FormProductos = () => {


    const {addProducto} = useContext(ProductsContext)
    const [producto, setProducto] = useState({
        id: uuidv4(),
        nombre: '',
        precio: '',
        imagen: ''
    })

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
        })
    }

    console.log(producto, 'estado inicial del producto')

    const handleSubmit = (e) => {
        e.preventDefault() // sirve para que no se actualice la pagina cuando se preciona el boton
        addProducto(producto)
        Swal.fire({
            position:'center',
            icon: 'success',
            title: 'producto agregado',
            showConfirmButton: false,
            timer: 1500
        })
        setProducto({
            id: uuidv4(),
            nombre: '',
            precio: '',
            imagen: ''
        })
        console.log('formulario ennviado')
    }

   
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>nombre</Form.Label>
        <Form.Control type="text" 
        value={producto.nombre} 
        onChange={handleChange}
        name='nombre' 
        placeholder="nombre del producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>precio</Form.Label>
        <Form.Control type='number' 
        value={producto.precio} 
        onChange={handleChange}
        name='precio' 
        placeholder='precio del producto' />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>imagen</Form.Label>
        <Form.Control type='text' 
        value={producto.imagen} 
        onChange={handleChange}
        name='imagen' 
        placeholder='imagen del producto' />
      </Form.Group>
      <Button type='submit'>Agregar Producto</Button>
    </Form>
    </>
  )
}

export default FormProductos