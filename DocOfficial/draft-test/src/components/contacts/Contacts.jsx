import React, { Component } from 'react'
import Contact from "./Contact";
import NavContact from "./NavContact";
import AddContact from "./AddContact";
import { Consumer } from "./contextContact"; /* et01 import consumer */
import './Contact.scss'

class Contacts extends Component {
    deleteFromParent = ( id ) => {
        const  { contacts } = this.state;
        console.log(contacts);
        const  newListContact = contacts.filter((ct) => ct.id !== id )
        this.setState({
          contacts : newListContact
        })
    }

    render() {
        return (
          <Consumer>
            { value => (
              <div>
                <NavContact user={value.contacts} listName="le service de compta" />
                <AddContact />

                {value.contacts.map((item)=>(
                     <Contact user={item} key={item.id} deleteOneContact={this.deleteFromParent.bind(this , item.id)} />
      )
    )
  }
              </div>
            )}
          </Consumer>
        )
    }
}

export default Contacts; 