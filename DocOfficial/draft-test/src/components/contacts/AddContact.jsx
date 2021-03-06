import React , { useState} from 'react'
import { Consumer, globalVar } from "./contextContact"
import PropTypes from 'prop-types'
// 01 : import useHistory du  package react-router-dom 
import { useHistory } from "react-router-dom"
import axios  from "axios"

function AddContact(props) {

    const [user, setUser] = useState({
        id : 0,
        name : "",
        email : "",
        phone : "",
        error : ""
    });

// 02 : en creer un objet history depuis useHistory
let history = useHistory();

    const updateInput = (e) => { // au onChange du input en maj le state !
        setUser({...user,  [e.target.name] : e.target.value});
    }

    // au submition du form en ajoute le user du state local dans le state du context !
    const addUser = (newUser, dispatch,  contacts, e) => {
        console.log("before  e.preventDefault()" , e.target );
        e.preventDefault();
        console.log("After  e.preventDefault()");
   
        const { name, email, phone } = newUser;
        const postUser = {name, email, phone }

        if (name && email && phone) {
            axios.post(globalVar.apiUsers, postUser)
                .then(res => {
                    dispatch({
                        type : "ADD_CONTACT",
                        payload : res.data
                    })
                   setUser({name :"", email: "",phone :"", error : "" });
                  }
                )
                .catch(err => {
                    //console.log(err);
                     setUser({...user, error : err.message })
                })

           // 03 :  en execute notre redirection a la vollé !! 
          // history.push('/page/success');
           console.log("fin redirection !! ");
        }
        else {
         // alert (" tous les champ sont obligatoire !! ");
          setUser({...user, error : " tous les champ sont obligatoire !!" })
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
                        <form onSubmit={addUser.bind(this, user, dispatch , contacts)} id="formAddUser"> {/*  {evt => addUser(user, dispatch , contacts,  evt)}  */}
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn btn-success" type="submit">add contact</button>
                            </div>
                           <input name="name" onChange={updateInput} value={name} type="text" className="form-control" placeholder="name" aria-label="" aria-describedby="basic-addon1" />
                           <input name="email" onChange={updateInput} value={email} type="text" className="form-control" placeholder="email" aria-label="" aria-describedby="basic-addon2" />
                           <input name="phone" onChange={updateInput} value={phone} type="text" className="form-control" placeholder="phone" aria-label="" aria-describedby="basic-addon3" />
                        </div>
                        {(user.error) && (
                          <em className=" alert alert-danger d-block"> {user.error} </em>
                        )}

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


 