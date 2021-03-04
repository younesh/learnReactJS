import React, { Component } from 'react';
import Contact from './Contact';

 //01 import connect ! 
import { connect } from 'react-redux';

class Contacts extends Component {
  state = {
    contacts : []
  }

  componentDidMount (){
    // 05 : lancer la maping du state reducer sur ce componant !! 
    this.props.getContacts();
  }
  render() {
    // 06 en recupere state mapé dans les propos depuis le reducer ! 
     const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

// 03 : méhtode deja definit ds redux, il retourne la data stocké ds le reducers en question ! 
// mapper le state envoyer par le reducer dans les props de ce componant 
const mapStateToProps = (state) => {
  return {
    contacts : state.myContact.contacts
  }
}

//4
// mapper les dispatch envoyer par le reducer dans les propos de ce  componant 
const mapDispatchToPropos = (dispatch) => {
  return {
    getContacts : () => {
        dispatch({
          type : "GET_CONTACTS"
        })
    }
  }
}
// 02 : on connect le cpt au methode redux
export default connect(mapStateToProps,mapDispatchToPropos)(Contacts);
   