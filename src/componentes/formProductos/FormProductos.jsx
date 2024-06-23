import { useState } from 'react'
import { Button, Form } from 'react-bootstrap';


const FormProductos = () => {

    const [nombre, setNombre] = useState()
    const [precio, setPrecio] = useState()

    const handleSubmit = (e) => {
        e.preventDefault() // sirve para que no se actualice la pagina cuando se preciona el boton
        console.log('formulario ennviado')
    }

    console.log(nombre, precio, 'nombre y precio desde el form')
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>nombre</Form.Label>
        <Form.Control type="text" 
        value={nombre} 
        onChange={(e) => {
            setNombre(e.target.value)
        }}
        name='nombre' 
        placeholder="nombre del producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>precio</Form.Label>
        <Form.Control type='number' 
        value={precio} 
        onChange={(e) => {
            setPrecio(e.target.value)
        }}
        name='precio' 
        placeholder='precio del producto' />
      </Form.Group>
      <Button type='submit'>Agregar Producto</Button>
    </Form>
    </>
  )
}

export default FormProductos