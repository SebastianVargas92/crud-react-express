import React, { Component } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CardImg from 'react-bootstrap/CardImg';
import TableList from './Table';
import FormAddEdit from './FormAddEdit';
import '../assets/css/formularios.css';
import instrumentoClase from '../model/instrumentoClase';
import Link from 'react-bootstrap/NavLink';
import axios from 'axios';

class Formulario extends Component {

    constructor() {
        super();        
        this.imagen_url='http://localhost:3000/images/';     
        this.state = {render:'',
            db:[],
            instrumento: '',
            precio: '',
            marca: '',
            modelo: '',
            costoEnvio: '',
            imagen: '',
            cantidadVendida: '',
            descripcion: '', 
            todo: []
        
        };      
        
        };

        

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
            
       


    handleClick(compName, e){
                
        const parametroId = compName;
            
            alert(parametroId);      
            
            
            const datapost = {
                baja: 'y',
                id: parametroId
            }
               
            let url = 'http://localhost:3000/delete';               
            
    
                axios.post(url,datapost)
                .then(response => {
                    console.log(JSON.stringify(response));
                    console.log("data " +  response.data);   
                    alert("Eliminado, perri");
                    
                    
                })
                .catch(error =>{
                    console.log("Error");
                    console.log(error);
                    alert("Error, breo");
                    
    
                })
                
    }

   instrumentoData(){
    
    const parametroId = this.state.render;      
    
    const instrumentos = this.state.db.map((instru, i)=>{
        if (parametroId===instru.id){
        instrumentoClase.id=instru.id;
        instrumentoClase.instrumento=instru.instrumento;
        instrumentoClase.marca=instru.marca;
        instrumentoClase.modelo=instru.modelo;
        instrumentoClase.precio=instru.precio;
        instrumentoClase.costoEnvio=instru.costoEnvio;
        instrumentoClase.cantidadVendida=instru.cantidadVendida;
        instrumentoClase.descripcion=instru.descripcion;
        instrumentoClase.imagen = instru.imagen;
        
    }    
   }
);
return instrumentoClase;
}


//listar prods
    listMethod(){
        
        

        const instrumentos = this.state.db.map((instru, i)=>{
                
           
            return (
        
        
        <tbody>
            <tr>
                <td>{instru.id}</td>
                <td>{instru.instrumento}</td>
                <td>{instru.marca}</td>
                <td>{instru.modelo}</td>
                <td><CardImg src={this.imagen_url + instru.imagen}></CardImg></td>
                <td>{instru.precio}</td>
                <td>{instru.costoEnvio}</td>
                <td>{instru.cantidadVendida}</td>
                <td>{instru.descripcion}</td>
                <td>
                <Link href={`/formAddEdit/${instru.id}`}><Button>Editar</Button></Link>
                    <Button onClick={this.handleClick.bind(this, instru.id)} id="boton">Eliminar</Button>
                </td>
            </tr>
            </tbody>
    
    )
}
);

return instrumentos;
    }


    showForm () {
       
}

render() {

    

    return (
        <React.Fragment>
            <Navigation></Navigation>
            <Container fluid="md">
               
                <Row>
                    <Col>
                       <Link href="/formAddEdit"> <Button className="add">Agregar</Button></Link>
                    </Col>
                    
                </Row>

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
    {this.listMethod()}
    </Table>
              
            </Container>


        </React.Fragment>
    );
}
}

export default Formulario;