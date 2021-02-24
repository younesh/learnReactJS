import React, { Component } from 'react'

const ContextContacts = React.createContext();  /* etap 00 :  en créer un context ! */

const reducerContact = (state , action) => {
    switch ( action.type ) {
      case "DELETE_CONTACT" : 
        return {
          contacts : state.contacts.filter((contact)=> contact.id !== action.payload)  // 
        };
      default : 
        return state;
    }
}
export  class ProviderContacts extends Component {  //  on enlvé le default car on v exporter plusieur chose ! 
    state = { /* etap 01 : copier le state contact ds le context ! ( avant le retour !  ) */
        contacts :   [
            { 
              id : 1,
              nom : "maxyoooo",
              mail : "Gyann@hotmail",
              tel : 5623154652
            },
            { 
              id : 2,  
              nom : "kevinneeee",
              mail : "kglwn@firefo.com",
              tel : 1232322132
            },
            { 
              id : 3,
              nom : "maeikelouuu",
              mail : "mmiki@gmail",
              tel : 5623154652
            },
          ],
          dispatch : (action) => {
             this.setState(state => reducerContact(state, action)); // il recevra un contact modifier
          } 
    }
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