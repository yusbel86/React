import React, {Component} from 'react';
import Card from './componente/card';


class App extends Component{
  render(){
    return(
      <div>
        <h1>Hola Mundo!</h1>
        <p>Bienvenido a los primeros pasos con React</p >
        <OtroSaludo />
        <Card />
       
      </div>
    );
  }
}



class OtroSaludo extends Component{
  render(){
    return(
      <p>Hola desde otro componente</p> 
    );
  }
}
export default App
