

import React, { Component } from 'react';
import Navigation from './Navigation';
import {instrumentos} from '../dao/instrumentos.json';
import CardBoot from './CardBoot';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import productosService from '../service/productos.service';
import Card from 'react-bootstrap/Card';



class Productos extends Component {
   
   constructor(){
       super();       
       this.state =  ({
           db:[],
           
        });
    }

    componentDidMount(){
        this._isMounted = true;
        this.getInstrumentosServer();
        
      }

      componentWillUnmount(){
        this._isMounted = false;
      }
    
      getInstrumentosServer(){

        fetch('http://localhost:3000/lista')
        .then(response => response.json())
        .then(responseJson =>{
            this.setState({db: responseJson})
        });
    }

    


   

    inputSend(cost) {
        if (cost.toLowerCase() !=="g"){
            return <p id="costoRojo">Envío interior de Argentina: ${cost}</p>
            
        } else {
    return <div className="imgEnvio">
           <Card.Img  className="envioCard" variant="top" src={'http://localhost:3000/images/envio.jpg'} height="17"/> 
           <p></p>
           </div>
        }
    }
      
   
    render() {
        
        let imagen_url='http://localhost:3000/images/';
        
            
        const instrumentos = this.state.db.map((instru, i)=>{

                         
                return (
            
                    <CardBoot key={instru.id} id={instru.id} prod={instru.instrumento} precio={"$ "+instru.precio} costoEnvio={this.inputSend(instru.costoEnvio)}  cantidadVendida={instru.cantidadVendida + " vendidos"} imagenPath={imagen_url + instru.imagen}></CardBoot>
                    )               

        }
        );


        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Container fluid="md">
              <Row>
              {instrumentos}
              </Row>
          </Container>
                
            </React.Fragment>
        );
    }
}

export default Productos;