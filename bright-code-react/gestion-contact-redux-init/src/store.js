import { createStore } from 'redux';
import rootReducers from './reducers'; // 

const initialState = {};
const store = createStore(rootReducers,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store;