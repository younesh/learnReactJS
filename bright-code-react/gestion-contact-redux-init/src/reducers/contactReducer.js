
const initialState = {
    contacts: [
        {
          id: 1,
          name: 'Mohamed IDBRAHIM',
          email: 'idbrahimdev@gmail.com',
          phone: '0650303315'
        },
        {
          id: 2,
          name: 'Basma IDBRAHIM',
          email: 'basma@gmail.com',
          phone: '0650303316'
        },
        {
          id: 3,
          name: 'Walid IDBRAHIM',
          email: 'walid@gmail.com',
          phone: '0650303317'
        }
      ]
};

const contactReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "GET_CONTACTS":
            return  {
                ...state,
                contacts : action.payload
            }
        // 01
        case "DELETE_CONTACT": 
        return  {
            ...state ,
            contacts : state.contacts.filter(contact => contact.id !== action.payload)
        }
        //02
        case "ADD_CONTACT": 
        return  {
            ...state ,
            contacts : [action.payload, ...state.contacts ]
        }
        default :
            {
                return state;
            }
    }
}; 

  export default contactReducer;