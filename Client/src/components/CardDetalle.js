
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CardDetalle extends Component {
    
    
   

    render() {
        <React.Fragment>
                <Navigation></Navigation>
                {instruEncontrado}
                <Card className="cardDetalle" style={{ width: '70%'}} >
                    <Container>                                                
                    <Card.Body>
                    <Card.Link href="/productos"><Button className ="botonVolver">
                        Volver
                        </Button>
                        </Card.Link>
                    <Row>
                        <Col>                        
                        <div className="imgDetalle">
                    <Card.Img id="imgDetalle" variant="top" src={imagen_url}/>
                    </div>                    
                    <Card.Text className="descripcionDetalle">                            
                            <p id="descripcionTitle">Descripcion: </p>
                        {instruEncontrado.descripcion}
                        </Card.Text>
                    </Col> 
                        
                    <Col>                    
                    <Card.Text>
                        <div className="vendidos">
                        {instruEncontrado.cantidadVendida + " vendidos"}
                        </div>
                        </Card.Text>                          
                        <Card.Title className="text-secondary">{instruEncontrado.instrumento}</Card.Title>
                        
                        <Card.Text className="precioDetalle">{"$ " +instruEncontrado.precio}</Card.Text>
                        
                        <Card.Text className="marca-modelo">
                        <p>Marca: {instruEncontrado.marca}</p>
                        <p id="modelo">Modelo: {instruEncontrado.modelo}</p>
                        </Card.Text>
                        
                        <Card.Text className="envioDetalle">
                        Costo Envío: 
                        <p id="costoRojo">Envío interior de Argentina: ${instruEncontrado.costoEnvio}</p>
                        
                        </Card.Text>
                        
                        
                        
                        <Button>
                        Agregar al carrito
                        </Button>
                        
                        
                        
                        </Col>
                        
                    
                    </Row>
                  
                    </Card.Body>
                        
                        </Container>
                </Card>
            </React.Fragment>
        );

    }
    
    export default CardDetalle;
