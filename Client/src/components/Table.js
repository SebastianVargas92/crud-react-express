import React, { Component } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import productosService from '../service/productos.service';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CardImg from 'react-bootstrap/CardImg';
import FormAddEdit from './FormAddEdit';

class TableList extends Component {
    
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
    
     
    

    showForm() {
        
    
      
        return <React.Fragment><Row><FormAddEdit instrumento={this.state.db.instrumento}></FormAddEdit></Row></React.Fragment>
    }



    render() {

        let imagen_url='http://localhost:3000/images/';
       
        const instrumentos = this.state.db.map((instru, i)=>{

                         
            return (
        
        
        <tbody>
            <tr>
                <td>{instru.id}</td>
                <td>{instru.instrumento}</td>
                <td>{instru.marca}</td>
                <td>{instru.modelo}</td>
                <td><CardImg src={imagen_url + instru.imagen}></CardImg></td>
                <td>{instru.precio}</td>
                <td>{instru.costoEnvio}</td>
                <td>{instru.cantidadVendida}</td>
                <td>{instru.descripcion}</td>
                <td>
                    <Button>Editar</Button>
                    <Button>Eliminar</Button>
                </td>
            </tr>
            </tbody>
    
    )
}
);

        return (
            <React.Fragment>
               
                <Container fluid="md">
                    
                   <p></p>
                   <p></p>
                   

                <Table striped bordered hover variant="light">
                <thead>
            <tr>
                <th>#</th>
                <th>Instrumento</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th>Costo Envío</th>
                <th>Cantidad Vendida</th>
                <th className="text-center" >Descripción</th>
                <th></th>
            </tr>
        </thead>
        {instrumentos}     
        {this.showForm()}
        
                </Table>
                
                </Container>


            </React.Fragment>
        );
    }
}

export default TableList;