
import React from 'react';

import "./App.scss";
/* new cpt  */
// import  Test01 from  "./components/test01/Test01";
import  "./components/test01/Test01.scss";

/* Clock :  test cycle de vie  */
import Clock from "./components/Clock/Clock";
import Contacts from "./components/contacts/Contacts";
import TestES6 from "./components/testEs6/TestES6";
import About from "./pages/About";

// import AnimeList from "./components/anime/AnimeList";

/* er importer le provider */
import { ProviderContacts } from "./components/contacts/contextContact";
import { ProviderAnime } from "./components/anime/AnimeContext";


import {BrowserRouter as Router,  Route, Switch, Link} from "react-router-dom";
 
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
        <Router> {/* Router englobe tout le contenu de app !  */}
        <div className="App">
          <h1> reactJS all tests ... </h1>
          <Link to="/" className=""> Clock </Link> |
          <Link to="contacts"> Contacts </Link> |
          <Link to="/es6"> TestES6 </Link>
          <Link to="/page/about"> About </Link>
 

          <Switch> {/* Switch doit englober les routes qui pointe vers component  */}
            <Route exact path="/" component={Clock} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/es6" component={TestES6} />
            <Route exact path="/page/about" component={About} />
          </Switch>

        </div>
        </Router>

      </ProviderAnime>
    </ProviderContacts>

  );
}

export default App;
