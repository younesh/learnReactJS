import React , { useState, useEffect} from 'react'
import { Consumer, globalVar } from "./contextContact"

// 01 : import useHistory du  package react-router-dom 
import { useHistory } from "react-router-dom"
import axios  from "axios"

function EditContact(props) {

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

    useEffect(()=>{
        console.log(" EditContact >> useEffect ");
        axios.get(globalVar.apiUsers + props.match.params.id )
            .then ( res => {
                setUser({
                    id : res.data.id,
                    name : res.data.name,
                    email :  res.data.email,
                    phone :  res.data.phone,
                });
            })
    },[]); // le 2eme param [] tableau vide , executer useeffect une seule fois sans se soucier n'importe quel autre state
    
    // au submition du form en ajoute le user du state local dans le state du context !
    const EditUser = (newUser, dispatch,  contacts, e) => {
        e.preventDefault();
        const { id, name, email, phone } = newUser;
        const postUser = {id, name, email, phone }

        if (name && email && phone) {
            console.log(globalVar.apiUsers + props.match.params.id +" >>", newUser);
            axios.put(globalVar.apiUsers + props.match.params.id , postUser)
                .then(res => {
                    console.log("res.data >> ", res.data);
                    dispatch({
                        type : "EDIT_CONTACT",
                        payload : res.data
                    })
                   setUser({name :"", email: "",phone :"", error : "" });
                   history.push("/"); // r"edirection apres update ... 
                  }
                )
                .catch(err => {
                     setUser({...user, error : err.message }) //  "AXIOS : " +
                })
        }
        else {
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
                        <form onSubmit={EditUser.bind(this, user, dispatch , contacts)} id="formAddUser"> {/*  {evt => addUser(user, dispatch , contacts,  evt)}  */}
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn btn-success" type="submit">Update ! </button>
                            </div>
                           <input name="name" onChange={updateInput} value={name} type="text" className="form-control" placeholder="name" aria-label="" aria-describedby="basic-addon1" />
                           <input name="email" onChange={updateInput} value={email} type="text" className="form-control" placeholder="email" aria-label="" aria-describedby="basic-addon2" />
                           <input name="phone" onChange={updateInput} value={phone} type="text" className="form-control" placeholder="phone" aria-label="" aria-describedby="basic-addon3" />
                        </div>
                        {(user.error) && (
                          <em className=" alert alert-danger d-block"> {user.error} </em>
                        )}
                        </form>
                    </div>
                    )
                }}

        </Consumer>
    )
}
 

export default EditContact


 