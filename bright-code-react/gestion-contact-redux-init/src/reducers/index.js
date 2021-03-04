import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

// en fait un maping de plusieur modules
export default combineReducers({
    myContact : contactReducer,
});