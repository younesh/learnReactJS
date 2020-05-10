import React from 'react';
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
/* new cpt  */
import  Test01 from  "./components/test01/Test01";
import  "./components/test01/Test01.scss";

/* Clock :  test cycle de vie  */
import Clock from "./components/Clock/Clock";

class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}

function Bay(props) {
  return <h4>au revoir mr , {props.name} ... a bientot</h4>;
}


function App() {
  return (
    <div className="App">
      <h1> reactJS all tests ... </h1>
      <Welcome name="seeven" grade="adjudin safi" />
      <Bay name="thrump" />
      <Test01 />
      
      <Clock />
    </div>
  );
}

export default App;
