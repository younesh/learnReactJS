import React , { useState, useRef} from 'react'
import { Consumer } from "./contextContact"; 



function AddContact() {
    const [user, setUser] = useState({
        id : 0,
        name : "",
        mail : "",
        tel : "",
    });

    /*  const inputName = useRef(null); 
    const inputMail = useRef(null); 
    const inputTel= useRef(null);  
    
              { 
              id : 2,  
              nom : "kevinneeee",
              mail : "kglwn@firefo.com",
              tel : 1232322132
            },
    */ 

    const updateInput = (e) => {
        // tu lui reprend la meme state a linstant t, mais apres modifier la proporité du stat qui étet modifier là, en occurence la  [e.target.name] 
        setUser({...user,  [e.target.name] : e.target.value});

    }

    const addUser = (newUser, dispatch,  contacts, e ) => {
        
        e.preventDefault(); 
        console.log("newUser >> " , newUser);
        console.log("dispatch >> " , dispatch);
        newUser = {...newUser, id : contacts.length + 1 }
        dispatch({
            type : "ADD_CONTACT",
            payload : newUser
        });
    }
    const {id, name, mail, tel} = user;
    return (
        <Consumer>
                { value => {
                    const {dispatch, contacts} = value; // destruct dispatch methode depuis le state du context !! 
                    return (
                        <div className="add-contact">
                        <form action="" onSubmit={evt => addUser(user, dispatch , contacts,  evt)}>
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

export default AddContact


 