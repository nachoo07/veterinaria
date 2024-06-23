
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductosContext'
import { Button, Table} from 'react-bootstrap';

const TablaProductos = () => {

    const { product } = useContext(ProductsContext)

    return (
        <>
            {product.length === 0 ? ('no hay productos') : (

                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>nombre</th>
                                <th>precio</th>
                                <th>acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((producto) => (
                                <>
                                    <tr>
                                        <td>{producto.id}</td>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.precio}</td>
                                        <td>
                                            <Button variant='warning'>Editar</Button>
                                            <Button variant='danger'>Eliminar</Button>
                                        </td>
                                    </tr>
                                </>

                            ))}


                        </tbody>
                    </Table>
                </>
            )}
        </>
    )
}

export default TablaProductos