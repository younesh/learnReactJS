
import React from 'react';

import "./App.scss";
/* new cpt  */
import  Test01 from  "./components/test01/Test01";
import  "./components/test01/Test01.scss";

/* Clock :  test cycle de vie  */
import Clock from "./components/Clock/Clock";
import Contacts from "./components/contacts/Contacts";
import AnimeList from "./components/anime/AnimeList";

/* er importer le provider */
import { ProviderContacts } from "./components/contacts/contextContact";
import { ProviderAnime } from "./components/anime/AnimeContext";
 
/*  event management  */ 

// import EventManagement from "./components/eventManagment/eventManagement"; 

class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}

function Bay(props) {
  return <h4>au revoir mr , {props.name} ... a bientot</h4>;
}


function App() {
  return (
    <ProviderContacts >
      <ProviderAnime>
      <div className="App">
        <h1> reactJS all tests ... </h1>
        <Welcome name="seeven" grade="adjudin safi" />
        <Bay name="thrump" />
        <Test01 />
        <Clock />
        {/* <EventManagement langue="Fr" data={['item01', 'item02', 'item03']}/> */}
        
        <section className="test">
          <Contacts />
        </section>
        
        <section className="test">
          <AnimeList /> 
        </section>


      </div>
      </ProviderAnime>
    </ProviderContacts>

  );
}

export default App;
