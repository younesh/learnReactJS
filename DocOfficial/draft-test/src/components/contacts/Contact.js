import React from 'react'
import PropTypes from 'prop-types'
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

    deleteClickChild (id) {
        this.props.deleteOneContact();   /*  et03 : appler la methode qui est affecté dans le parent */
    }
    render() {
        const { id, nom, mail , tel } = this.props.user;
        const { showBlocInfo } = this.state;
        return ( 
    
            <div className="contact">
                <h3 onClick={this.showHideBlocInfo}> {nom} </h3> 
                <div className={(showBlocInfo) ? "contact__info contact__info--open" : "contact__info" } >
                    <p> {mail} </p>
                    <p> {tel} </p>
                </div>
                <button className="btn btn-danger" onClick={this.deleteClickChild.bind(this, id)}> delette </button> {/* et01 */}
              </div>
        
          )
    }
}

Contact.propTypes = {
    user : PropTypes.object.isRequired,
    deleteOneContact : PropTypes.func.isRequired,  /*  et02 : controller la props ( il doit avoir une méthode comme val ) */
}

Contact.defaultProps = {
    user : {
        id :  0,
        nom : "defaultNom",
        mail : "default@mail.com",
        tel : "0000000",
    }
}

export default Contact; 
