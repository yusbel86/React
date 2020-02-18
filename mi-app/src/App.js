import React, {Component} from 'react';
import FeedbackMessage from './componente/index ';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Hola Mundo!</h1>
        <p>Bienvenido a los primeros pasos con React</p >
        <OtroSaludo />
        <FeedbackMessage />
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

export default App;
