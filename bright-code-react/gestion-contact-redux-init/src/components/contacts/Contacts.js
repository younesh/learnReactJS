import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
// 2 : 
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
  state = {
    contacts : []
  }

  componentDidMount (){
 // 4 Tous ce qui'es passé ds le 2eme param de connect : { getContacts }, est recupré ds les propos !! 
    this.props.getContacts();
  }
  render() {
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


const mapStateToProps = (state) => {
  return {
    contacts : state.myContact.contacts
  }
}

// 1 : en supprim mapDispatchToPropos car en passe par des action centralisé désormais 
 ///// mapDispatchToPropos ... /////

// 3 : en remplace le 2eme param mapDispatchToPropos par { getContacts }
export default connect(mapStateToProps,{ getContacts })(Contacts);
   