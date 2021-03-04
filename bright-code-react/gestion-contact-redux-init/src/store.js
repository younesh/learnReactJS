import { createStore } from 'redux';
// rootReducers :   src/reducers/index.js qui regroupe tous les reducer
import rootReducers from './reducers';

const initialState = {};
const store = createStore(rootReducers,initialState,
 // code pour avoir le debugage du redux dans les toolDev de chrome !
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;