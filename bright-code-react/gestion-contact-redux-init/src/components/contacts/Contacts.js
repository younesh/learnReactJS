import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';

class Contacts extends Component {
  state = {
    contacts : []
  }

  componentDidMount (){
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

const mapDispatchToPropos = (dispatch) => {
  return {
    getContacts : () => {
        dispatch({
          type : "GET_CONTACTS"

        })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToPropos )(Contacts);
