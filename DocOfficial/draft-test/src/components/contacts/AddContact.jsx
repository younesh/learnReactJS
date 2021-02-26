import React , { useState} from 'react'
import { Consumer } from "./contextContact"
import PropTypes from 'prop-types'
// 01 : import useHistory du  package react-router-dom 
import { useHistory } from "react-router-dom"

function AddContact(props) {

    const [user, setUser] = useState({
        id : 0,
        name : null,
        mail : "le mail",
        tel : "le tel ",
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
        const {name,mail, tel  } = newUser
        if (newUser!=="" && mail !=="" && tel !== "" ) {
            dispatch({
                type : "ADD_CONTACT",
                payload : newUser
            });
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

    const {id, name, mail, tel} = user; // destrctibg state !
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
                         <input name="mail" onChange={updateInput}   defaultValue={mail} type="text" className="form-control" placeholder="mail" aria-label="" aria-describedby="basic-addon2" />
                         <input name="tel" onChange={updateInput}    defaultValue={tel} type="text" className="form-control" placeholder="tel" aria-label="" aria-describedby="basic-addon3" />
             
                        </div>
                        <code>
                            <ul>
                                <li> id : {id} </li>
                                <li> name : {name} </li>
                                <li> mail : {mail} </li>
                                <li> tel : {tel} </li>
                            </ul>
                        </code>
                        </form>
                    </div>
                    )
                }}

        </Consumer>
    )
}

/*
        id : 0,
        name : "",
        mail : "",
        tel : "",
*/

AddContact.propTypes = { // NB ce ‘p’ est minuscule alors que 
    name : PropTypes.string.isRequired,// NB alors que ce ‘P’ est en MAJISCULE
    mail : PropTypes.string.isRequired,// NB alors que ce ‘P’ est en MAJISCULE
    tel : PropTypes.string.isRequired,// NB alors que ce ‘P’ est en MAJISCULE
}

export default AddContact


 