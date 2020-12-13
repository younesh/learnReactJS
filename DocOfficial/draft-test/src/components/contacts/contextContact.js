import React, { Component } from 'react'

const ContextContacts = React.createContext();  /* etap 00 :  en créer un context ! */

export  class ProviderContacts extends Component {  //  on enlvé le default car on v exporter plusieur chose ! 

    state = { /* etap 01 : copier le state contact ds le context ! ( avant le retour !  ) */
        contacts :   [
            { 
              id : 1,
              nom : "maxyo",
              mail : "Gyann@hotmail",
              tel : 5623154652
            },
            { 
              id : 2,
              nom : "kevinne",
              mail : "kglwn@firefo.com",
              tel : 123233212542132
            },
            { 
              id : 3,
              nom : "maeikelo",
              mail : "mmiki@gmail",
              tel : 5623154652
            },
          ]
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