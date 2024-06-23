import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TablaProductos from '../../componentes/tablas/TablaProductos'
import FormProductos from '../../componentes/formProductos/FormProductos'

const Administrador = () => {
  return (
    
    <>
    <div>Administrador</div>

    <Container>
        <Row>
            <Col>
            <FormProductos/>
            </Col>
            <Col>
            <TablaProductos/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Administrador