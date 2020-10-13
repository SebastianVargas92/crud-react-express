import React, { Component } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Formulario from './Formulario';
import axios from 'axios';
import Link from 'react-bootstrap/NavLink';

class FormAddEdit extends Component {

    constructor() {
        super();
        this.state = {            
            instrumento : '',
            precio: '',
            marca: '',
            modelo: '',
            costoEnvio: '',
            imagen: '',
            cantidadVendida: '',
            descripcion: '',
            id: '',
            instrument: []
        
        };  
        this.fileInput = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
       
        };

        componentDidMount(){
            this._isMounted = true;
            this.getInstrumentosXIdServer();
            
          }

          
    
          componentWillUnmount(){
            this._isMounted = false;

           
          } 
 
    
        handleChange = (event) =>{
            
            this.setState({
               [event.target.name]: event.target.value
               // instrumento: event.target.value
            });
            
          }

          getInstrumentosXIdServer(){
    
            const parametroId = this.props.match.params.id;
            if (parametroId!==null){
            console.log("parametro" + parametroId);
            fetch('http://localhost:3000/lista/' + parametroId)
            .then(response => response.json())
            .then(responseJson =>{
            this.setState({instrument: responseJson})            
        })       

           
      }
        }

           
        editOrSave() {
            let baseUrl = "http://localhost:3000";
            
             let userId = this.props.match.params.id;
             console.log(userId)
             if (userId>0){
             
               return baseUrl+="/edit";

             } else {
               return baseUrl+="/new";

             }
         }


      handleSubmit(event) {   

         const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
       
        event.preventDefault();
        console.log(this.state);
            
    
        alert('A name was submitted: ' + this.state.instrumento + " precio: "+ this.state.precio);        

       // url de backend
       
            
           
          
            // parametros de datos post   - nuevos valores
            const datapost = {
            
            instrumento: document.getElementById('instrumento').value,
            precio: document.getElementById('precio').value,
            marca: document.getElementById('marca').value,
            modelo: document.getElementById('modelo').value,
            costoEnvio: document.getElementById('costoEnvio').value,
            imagen: this.fileInput.current.files[0].name,
            cantidadVendida: document.getElementById('cantidadVendida').value,
            descripcion: document.getElementById('descripcion').value,
            id: this.props.match.params.id
            }
           let url =this.editOrSave();
           console.log(url);
           alert(this.fileInput.current.files[0].name);

            axios.post(url,datapost)
            .then(response => {
                console.log(JSON.stringify(response));
                console.log("data " +  response.data);   
                alert("Guardado");
                
                
            })
            .catch(error =>{
                console.log("Error");
                console.log(error);
                alert("Error");
                

            })
        }
     
    
      

    render() {
        
        
        this.state.instrument.map((instru, i)=>{
            this.state.instrumento = instru.instrumento;
            this.state.descripcion = instru.descripcion;
            this.state.cantidadVendida = instru.cantidadVendida;
            this.state.precio = instru.precio;
            this.state.marca = instru.marca;
            this.state.modelo = instru.modelo;
            this.state.imagen = instru.imagen;
            this.state.costoEnvio = instru.costoEnvio;
        });        
      

       return (
            <React.Fragment>
                <Navigation></Navigation>

                <Container fluid="md">
                    <Row>
                        <Col>
                        <p></p>
                        <p></p>
                        <Form onSubmit={this.handleSubmit}>
                        <Link href="/formulario"><Button className ="volverForm">
                        Volver
                        </Button>
                        </Link>
                                
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Nombre instrumento</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresar instrumento" defaultValue={this.state.instrumento} id="instrumento" name="instrumento" onChange={this.handleChange} required/>
                                    
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" placeholder="Precio" defaultValue={this.state.precio} id="precio" name="precio" onChange={this.handleChange} required/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control type="text" placeholder="Marca" defaultValue={this.state.marca} id="marca" name="marca" onChange={this.handleChange} required/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Modelo</Form.Label>
                                    <Form.Control type="text" placeholder="Modelo" defaultValue={this.state.modelo} id="modelo" name="modelo" onChange={this.handleChange} required/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control type="file" placeholder="Imagen" ref={this.fileInput} id="imagen" name="imagen" onChange={this.handleChange} required/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Costo envío</Form.Label>
                                    <Form.Control type="text" placeholder="Costo envío" defaultValue={this.state.costoEnvio} id="costoEnvio" name="costoEnvio" onChange={this.handleChange} required/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Cantidad vendida</Form.Label>
                                    <Form.Control type="number" placeholder="Cantidad vendida" defaultValue={this.state.cantidadVendida} id="cantidadVendida" name="cantidadVendida" onChange={this.handleChange} required/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control as="textarea" rows="3"  placeholder="Descripción" defaultValue={this.state.descripcion} id="descripcion" name="descripcion" onChange={this.handleChange} required/>                                    
                                </Form.Group>
                                
                                

                                
                                <Button variant="primary" type="submit">
                                    Guardar
                                </Button>
                                
                            </Form>

                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>


            </React.Fragment>
        );
    }
}

export default FormAddEdit;