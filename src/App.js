import React from "react";
import Buttons from "./components/Buttons";
import './App.css';
import github from './images/github.png';

class App extends React.Component {
  state = {
    display: 0,
    secDisplay: 0,
  }

  render() {
  return (
    <div className="all">
    
      <header>CALCULADORA</header>

      <div className="calculator">

        <div className="allDisplay">
          <div className="secondDisplay">
            {this.state.secDisplay}
          </div>
          <div className="firstDisplay">
            {this.state.display}
          </div>
        </div>
      

        <div className="buttons"> 

          <div className="container1">
            <div className="container-grey"> 
              <Buttons element='C'></Buttons>
              <Buttons element='+/-'></Buttons>
              <Buttons element='%'></Buttons>
            </div>
            <div className="color-purple">
              <Buttons element='/'></Buttons>
            </div>
          </div>

          <div className="container2">
            <div className="container-white">
              <Buttons element='1'></Buttons>
              <Buttons element='2'></Buttons>
              <Buttons element='3'></Buttons>
            </div>
            <div className="color-purple">
              <Buttons element='x'></Buttons>
            </div>
          </div>

          <div className="container3">
            <div className="container-white">
              <Buttons element='4'></Buttons>
              <Buttons element='5'></Buttons>
              <Buttons element='6'></Buttons>
            </div>
            <div className="color-purple">
              <Buttons element='-'></Buttons>
            </div>
          </div>

          <div className="container4">
            <div className="container-white"> 
              <Buttons element='7'></Buttons>
              <Buttons element='8'></Buttons>
              <Buttons element='9'></Buttons>
            </div>
            <div className="color-purple">
              <Buttons element='+'></Buttons>
            </div>
          </div>

          <div className="container5">
            <div className="container-white"> 
              <Buttons element='0'></Buttons>
              <Buttons element='.'></Buttons>
              <Buttons element='←'></Buttons>
            </div>
            <div className="color-ciano">
              <Buttons element='='></Buttons>
            </div>
          </div>
        </div>
      </div>
    
      <footer>
        <p>Desenvolvido por Júlia Marques</p>
        <img className="img" src={github}alt="github" />
      </footer>
    </div>
  );
  }
}

export default App;
