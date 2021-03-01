import React from 'react'
 import { Consumer } from "../components/contacts/contextContact";
 
function DetailContact( props ) {
    return (
        <Consumer>
            { value =>{
                const { id, name, email , phone, username, website }= value.contacts.find( user => user.id == props.match.params.id );
                 
                return ( 
                    <div className="page page--detail-contact">
                        <p> Name : {id} {name}</p>
                        <p> email : {email} </p>
                        <p> username : {username} </p>
                        <p> website : {website} </p>
                        <p> phone : {phone} </p>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default DetailContact
