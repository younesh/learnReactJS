import React , { useState} from 'react'
import { Consumer, globalVar } from "./contextContact"
import PropTypes from 'prop-types'
// 01 : import useHistory du  package react-router-dom 
import { useHistory } from "react-router-dom"
import axios  from "axios"

function AddContact(props) {

    const [user, setUser] = useState({
        id : 0,
        name : null,
        email : "le email",
        phone : "le phone ",
    });

// 02 : en creer un objet history depuis useHistory
let history = useHistory();


    const updateInput = (e) => { // au onChange du input en maj le state !
        setUser({...user,  [e.target.name] : e.target.value});
    }

    // au submition du form en ajoute le user du state local dans le state du context !
    const addUser = (newUser, dispatch,  contacts, e  ) => {
        e.preventDefault();
        newUser = {...newUser, id: contacts.length + 1 }
        const {name,email, phone  } = newUser
        if (name!=="" && email !=="" && phone !== "" ) {
            axios.post(globalVar.apiUsers)
                .then(e =>
                 dispatch({
                    type : "ADD_CONTACT",
                    payload : newUser
                }))
                .catch(err => console.log(err))

           // this.props.history.push("/page/success");
           //  withRouter.history.push("/page/success");
           // 03 :  en execute notre redirection a la vollé !! 
           history.push('/page/success');
           console.log("fin redirection !! ");
        }
        else {
          alert (" tous les champ sont obligatoire !! ");
        }
    }

    const {id, name, email, phone} = user; // destrctibg state !
    return (
        <Consumer>
                { value => {
                    const {dispatch, contacts} = value; // destruct dispatch methode depuis le state du context !! 
                    return (
                        <div className="add-contact">
                        {/*  */}
                        <form onSubmit={evt => addUser(user, dispatch , contacts,  evt)}> {/*  {evt => addUser(user, dispatch , contacts,  evt)}  */}
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn btn-success" type="submit">add contact</button>
                        </div>
                         <input name="name" onChange={updateInput} defaultValue={name}  type="text" className="form-control" placeholder="name" aria-label="" aria-describedby="basic-addon1" />
                         <input name="email" onChange={updateInput}   defaultValue={email} type="text" className="form-control" placeholder="email" aria-label="" aria-describedby="basic-addon2" />
                         <input name="phone" onChange={updateInput}    defaultValue={phone} type="text" className="form-control" placeholder="phone" aria-label="" aria-describedby="basic-addon3" />
             
                        </div>
                        <code>
                            <ul>
                                <li> id : {id} </li>
                                <li> name : {name} </li>
                                <li> email : {email} </li>
                                <li> phone : {phone} </li>
                            </ul>
                        </code>
                        </form>
                    </div>
                    )
                }}

        </Consumer>
    )
}

AddContact.propTypes = { // NB ce ‘p’ est minuscule alors que 
    name : PropTypes.string.isRequired,// NB alors que ce ‘P’ est en MAJISCULE
    email : PropTypes.string.isRequired,// NB alors que ce ‘P’ est en MAJISCULE
    phone : PropTypes.string.isRequired,// NB alors que ce ‘P’ est en MAJISCULE
}

export default AddContact


 