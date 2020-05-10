import React from "react";

class Clock extends React.Component {
  constructor(props) {
    // constructeur pour stocker le state local
    super(props); // en passe tjrs les propos au constructeur de base
    this.state = { date: new Date() }; // en crée un state local où en passe la date désormais
  }

  /* La méthode componentDidMount() est exécutée après que la sortie du composant a été injectée dans le DOM.
  C’est un bon endroit pour mettre en place le minuteur */

  //Notez qu’on a enregistré l’ID du minuteur directement sur this (this.timerID).
 
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //Nous allons détruire le minuteur dans la méthode de cycle de vie componentWillUnmount() :
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // tick pour planifier une mise à jour de l’état local du composant à l'aide de  this.setState
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
