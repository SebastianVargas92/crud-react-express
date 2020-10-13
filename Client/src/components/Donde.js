

import React, { Component } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../assets/css/nav.css";
//import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%',
  };


class Donde extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
    
    render() {

        

        return (
            <React.Fragment>
                <Navigation></Navigation>
                
                  <h1 className="homeTitle">Dónde Estamos</h1>
                  <br></br>
                  <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: -32.886319, lng: -68.838303}}
        >
          <Marker
          onClick={this.onMarkerClick}
          name={'MUSICAL HENDRIX'}
          rubro={'Instrumentos Musicales'}
          subtitulo={'Av. Las Heras y San Martín'}
        />
        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <h5>{this.state.selectedPlace.rubro}</h5>
            <h6>{this.state.selectedPlace.subtitulo}</h6>
          </div>
        </InfoWindow>
        </Map>
 
         
             
                
                
            </React.Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAl6_NOLaD31dbXQYGnYwXYn5XEcyQle8Q'
  })(Donde);