

import React, { Component } from 'react';
import {instrumentos} from '../dao/instrumentos.json';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/css/detalle.css';

class InstrumentoDetalle extends Component {


    constructor(){
        super();
        this.state =  ({
            instrument:[],
            
         });
        
     }

     componentDidMount(){
        this._isMounted = true;
        this.getInstrumentosXIdServer();
      }

      componentWillUnmount(){
        this._isMounted = false;
      }
    
      getInstrumentosXIdServer(){
        const parametroId = this.props.match.params.id;
        console.log(parametroId);
        fetch('http://localhost:3000/lista/' + parametroId)
        .then(response => response.json())
        .then(responseJson =>{
            this.setState({instrument: responseJson})            
        });
    }

   
    
    

    inputEnvio(cost) {
    if (cost !=="G"){
        return <p id="costoRojo">Envío interior de Argentina: ${cost}</p>;
        
    } else {
return <img className="imgEnvioDetalle" src={'http://localhost:3000/images/envio.jpg'}/>;
    }
}
   
    render() {

        const instruEncontrado = this.state.instrument.map((instru, i)=>{
            this.costo = instru.costoEnvio;
            this.descripcion = instru.descripcion;
            this.vendidos = instru.cantidadVendida;
            this.precio=instru.precio;
            this.marca=instru.marca;
            this.modelo=instru.modelo;
            this.img=instru.imagen;
            this.instrumento=instru.instrumento;
        });
        console.log(instruEncontrado);
    
        const imagen_url = "http://localhost:3000/images/" + this.img;
      

        return (
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
                        {this.descripcion}
                        </Card.Text>
                    </Col> 
                        
                    <Col>

                    
                    <Card.Text>
                        <div className="vendidos">
                        {this.vendidos + " vendidos"}
                        </div>
                        </Card.Text>  
                        
                        <Card.Title className="text-secondary">{this.instrumento}</Card.Title>
                        
                        <Card.Text className="precioDetalle">{"$ " + this.precio}</Card.Text>
                        
                        <Card.Text className="marca-modelo">
                        <p>Marca: {this.marca}</p>
                        <p id="modelo">Modelo: {this.modelo}</p>
                        </Card.Text>
                        
                        <Card.Text className="envioDetalle">
                        Costo Envío:                     
                        {this.inputEnvio(this.costo)}
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
}
     
    export default InstrumentoDetalle;