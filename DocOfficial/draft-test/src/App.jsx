
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
import SuccessAdd from "./pages/SuccessAdd";
// 01 : importer la page 404
import notFound from "./pages/notFound";
import DetailContact from "./pages/DetailContact";
import EditContact from "./components/contacts/EditContact";

// import AnimeList from "./components/anime/AnimeList";

/* er importer le provider */
import { ProviderContacts } from "./components/contacts/contextContact";
import { ProviderAnime } from "./components/anime/AnimeContext";

// le package react-router-dom : pour la gestion des route ds notre app 
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
          {/* creation du menu avec Link */}
          <Link to="/" className=""> Home </Link> |
          <Link to="/es6"> TestES6 </Link>
          <Link to="/page/about"> About </Link>
          <Link to="/page/success"> Succes </Link>
 

          <Switch> {/* Switch doit englober les routes qui pointe vers component  */}
           {/* liste des routes de l'app :  */}
            <Route exact path="/" component={Contacts}/>
            <Route exact path="/es6" component={TestES6} />
            <Route exact path="/page/about" component={About} />
            <Route exact path="/page/success" component={SuccessAdd} />
            <Route exact path="/update/:id" component={EditContact} />
            <Route exact path="/page/contact-detail/:id/" component={DetailContact} />

            {/* 02 : ajouter la route 404 en dernier qui prend les url non définit avant et qui rederige vers la 404 ! */}
            <Route component={notFound} />
          </Switch>

        </div>
        </Router>

      </ProviderAnime>
    </ProviderContacts>

  );
}

export default App;
