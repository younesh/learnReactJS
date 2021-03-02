import React, { Component } from 'react'
import axios from "axios"

const ContextContacts = React.createContext();  /* etap 00 :  en créer un context ! */
const reducerContact = (state , action) => {
    switch ( action.type ) {
      case "DELETE_CONTACT" : 
        return {
          contacts : state.contacts.filter((contact)=> contact.id !== action.payload)  // 
        };
      case "ADD_CONTACT" : 
        return {
          contacts : [action.payload , ...state.contacts]
        };
        case "EDIT_CONTACT" : 
        return {
          contacts : state.contacts.map(contact => (contact.id === action.payload.id) ? action.payload : contact )
        };

      default : 
        return state;
    }
}

export  class ProviderContacts extends Component {  //  on enlvé le default car on v exporter plusieur chose ! 
    state = { /* etap 01 : copier le state contact ds le context ! ( avant le retour !  ) */
        contacts : [],
          dispatch : (action) => {
             this.setState(state => reducerContact(state, action)); // il recevra un contact modifier
          } 
    }

     // au chargelent du composant : en remplit le state contat depuis la Fake API jsonplaceholder !
     componentWillMount() {
      axios.get(globalVar.apiUsers)
        .then(res => this.setState({ contacts : res.data }))
        .catch(err => console.log(err));
    }

    /* async componentWillMount() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/");
      console.log(res.json());
     this.setState({ contacts : res.json() });
    } */


    render() {
        return (
            <div> { /* etap 03 : Mise à disposition du status du context a ces children */}
                    <ContextContacts.Provider value={this.state}> {/* on passe le state a tous les cpt enfant a ce block !!  */}
                        {this.props.children}
                    </ContextContacts.Provider>
            </div>
        )
    }
}

export  const Consumer = ContextContacts.Consumer;
export const globalVar = {
  apiUsers : "https://jsonplaceholder.typicode.com/users/"
}