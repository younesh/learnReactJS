import React , { useState, useRef} from 'react'



function AddContact() {
    const [user, setUser] = useState({
        name : "",
        mail : "",
        tel : "",
    });

    /*  const inputName = useRef(null); 
    const inputMail = useRef(null); 
    const inputTel= useRef(null);  */ 

    const updateInput = (e) => {
        // tu lui reprend la meme state a linstant t, mais apres modifier la proporité du stat qui étet modifier là, en occurence la  [e.target.name] 
        setUser({...user, [e.target.name] : e.target.value}); 
    }

    const addUser = (e) => {
        
        e.preventDefault(); 
        console.log("user.name >> " + user.name);
        console.log("user.mail >> " + user.mail);
        console.log("user.tel >> " + user.tel);

    }
    const {name, mail, tel} = user;
    return (

        <div className="add-contact">
            <form action="" onSubmit={addUser}>
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
                    <li> name : {name} </li>
                    <li> mail : {mail} </li>
                    <li> tel : {tel} </li>
                </ul>
            </code>
            </form>
        </div>
    )
}

export default AddContact


 