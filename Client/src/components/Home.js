import React, { Component } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../assets/css/nav.css";


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Container fluid="md">
              <Row>
                  <div className="CardReact">
                  <h1 className="homeTitle">MUSICAL HENDRIX</h1>
                      <div id="bodyFont">
                      <p >Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia.</p>
                      
                      <p>Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</p>                   
                      </div>
                      </div>
              </Row>
          </Container>
                
                
            </React.Fragment>
        );
    }
}

export default Home;