
import './assets/css/App.css';
import React, {Component} from 'react';
import Home from './components/Home';

import Donde from './components/Donde';
import Productos from './components/Productos';
import Formulario from './components/Formulario';
import InstrumentoDetalle from './components/InstrumentoDetalle';
import { Switch, Route } from 'react-router-dom';
import TableList from './components/Table';
import FormAddEdit from './components/FormAddEdit';


class App extends Component {

  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/home" component={Home} ></Route>
        <Route exact path="/productos" component={Productos} ></Route>
        <Route exact path="/donde" component={Donde} ></Route>
        <Route exact path="/formulario" component={Formulario} ></Route>        
        <Route exact path="/FormAddEdit" component={FormAddEdit} ></Route>
        <Route exact path="/FormAddEdit/:id" component={FormAddEdit} ></Route>
        <Route path="/instrumentoDetalle/:id" component={InstrumentoDetalle} ></Route>
        
      </Switch>
    ) 
  }



}
export default App;
