import React from 'react'
 import { Consumer } from "../components/contacts/contextContact";
 
function DetailContact( props ) {
    return (
        <Consumer>
            { value =>{
                const { id,  name , mail, tel } = value.contacts.find( user => user.id == props.match.params.id);
                return ( 
                    <div className="page page--detail-contact">
                        <h2> contact {id} - {name} </h2>
                        <p> mail :  { mail}</p>
                        <p> tel :  { tel}</p> 
                    </div>
                )
            }}
        </Consumer>
    )
}

export default DetailContact
