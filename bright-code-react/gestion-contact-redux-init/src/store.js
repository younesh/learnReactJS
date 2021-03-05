// 02 + "compose" pour utiliser le thunk ds le 3e param de createStore !
//    + "applyMiddleware" permet d'appliquer le Middleware ( thunk ) au store !
import { createStore, compose, applyMiddleware } from 'redux';
// 01 le middelware thunk : Pour que react travail avec des api d’un autre domain
import thunk from "redux-thunk";
import rootReducers from './reducers';

const initialState = {};
const store = createStore(rootReducers,initialState,
    compose (
        // 03 : appliquer le Middleware ( thunk ) au store 
        applyMiddleware(thunk)
         // debug redux ds chrome : 
        ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;