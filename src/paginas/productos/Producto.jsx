import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap';
import {ProductsContext} from '../../context/ProductosContext';
import { useContext} from 'react';


const Producto = () => {

    const {product} = useContext(ProductsContext)

  console.log(product, 'productos desde productos')
  return (
    <>
      <h1>componenete de productos</h1>
      <Container>
        {product.length === 0 ? (<h2>aqui no hay nada</h2>)
          : (
            <Row>
              {product.map((producto) =>
                <>
                  <Col xs={12} lg={3} md={4} sm={6}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>{producto.id}</Card.Title>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Title>{producto.precio}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )}
            </Row>
          )}
      </Container>
    </>
  )
}

export default Producto