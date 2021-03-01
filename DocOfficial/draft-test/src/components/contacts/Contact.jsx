import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/* et01 : en import un Consumer */
import { Consumer, globalVar  } from "./contextContact"; 
import {Link} from "react-router-dom";
import './Contact.scss'
import axios from 'axios'



class Contact extends React.Component {

    state = {
        showBlocInfo : true
    }

    showName(civility, name) {
        console.log("hello " +  civility + " " + name);
    }

    showHideBlocInfo = () => {
        this.setState({
            showBlocInfo : !this.state.showBlocInfo
        })
    }
    // function qui appelle le dispach qui modifira le state du context !!! 
    deleteClickChild (id, dispatch) {
        axios.delete(globalVar.apiUsers + id)
        .then(res =>{
            dispatch({
                type : "DELETE_CONTACT",
                payload : id
            })
          }
        )
        .catch(err => console.log(err))
    }
    render() {
        const { id, name, email , phone, username, website } = this.props.user; // atention !! >> props destructurée 
        const { showBlocInfo } = this.state;
        return (
            <Consumer>
                { value => {
                    const {dispatch} = value; // destruct dispatch methode depuis le state du context !! 
                    return (
                        <div className="contact">
                  <Link to={"/page/contact-detail/" + id }> <h3 onClick={this.showHideBlocInfo}> {name} </h3></Link>
                        {/* <div className={(showBlocInfo) ? "contact__info contact__info--open" : "contact__info" } > */}
                        <div className= {`contact__info  ${(showBlocInfo) ? "contact__info--open" : ""}`} >
                        <p> Name : {id} {name}</p>
                            <p> email : {email} </p>
                            <p> username : {username} </p>
                            <p> website : {website} </p>
                            <p> phone : {phone} </p>
                        </div>
                        <button className="btn btn-danger" onClick={this.deleteClickChild.bind(this, id, dispatch)}> delette </button> {/* et01 */}
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    user : PropTypes.object.isRequired
    /* en enleve la validation avec delete .... */
}

Contact.defaultProps = {
    user : {
        id :  0,
        name : "defaultname",
        mail : "default@mail.com",
        phone : "0000000",
    }
}

export default Contact; 
