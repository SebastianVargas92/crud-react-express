
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class CardBoot extends Component {
    
    
       

    render() {

      
    
        return (
            <React.Fragment>
                <Card className="CardReact" style={{ width: '80%'}} >
                    <Container>
                    <Row>
                        <Col>
                        
                            <div className="divImg">
                    <Card.Link href={`/InstrumentoDetalle/${this.props.id}`}><Card.Img variant="top" src={this.props.imagenPath.toLowerCase()}/></Card.Link>
                    </div>
                    </Col> 
                        
                    <Col>
                        
                        <div className="divCard">
                    <Card.Body>
                        <Card.Title className="text-secondary">{this.props.prod}</Card.Title>
                        
                        <Card.Subtitle className="text-dark">{this.props.precio}</Card.Subtitle>
                        <div class="costo">                           
                                                
                        {this.props.costoEnvio}    

                        </div>
                        <div className="vendidosCard">
                        <Card.Text>
                        {this.props.cantidadVendida}
                        </Card.Text>
                        </div>
                        </Card.Body>
                        </div>
                        </Col>
                        
                    
                    </Row>
                        
                        
                        </Container>
                </Card>
            </React.Fragment>


        );
    }
}



export default CardBoot;

