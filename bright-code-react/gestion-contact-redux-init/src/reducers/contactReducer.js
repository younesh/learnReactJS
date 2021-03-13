
const initialState = {
    contacts: [],
    //01
    contact: {}
};

const contactReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "GET_CONTACTS":
            return  {
                ...state,
                contacts : action.payload
            }
        case "DELETE_CONTACT": 
        return  {
            ...state ,
            contacts : state.contacts.filter(contact => contact.id !== action.payload)
        }
        case "ADD_CONTACT":
        return  {
            ...state ,
            contacts : [action.payload, ...state.contacts ]
        }

        case "GET_ONE_CONTACT" : 
        console.log("GET_ONE_CONTACT >> ",  action.payload);
        return {
          ...state,
          //02
          contact : action.payload
        }
        case  "UPDATE_CONTACT" : 
        return {
         ...state,
         contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
        }
        default :
        {
            return state;
        }
    }
}; 

  export default contactReducer;