import React from 'react'
import PropTypes from 'prop-types'
/* et01 : en import un Consumer */
import { Consumer } from "./contextContact"; 
import {Link} from "react-router-dom";
import './Contact.scss'
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
        console.log("deleteClickChild click ");
        dispatch({
            type : "DELETE_CONTACT",
            payload : id
        });
    }
    render() {
        const { id, name, mail , tel } = this.props.user; // atention !! >> props destructurée 
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
                            <p> {mail} </p>
                            <p> {tel} </p>
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
        tel : "0000000",
    }
}

export default Contact; 
