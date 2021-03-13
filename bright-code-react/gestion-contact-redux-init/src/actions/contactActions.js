// 01 
import axios from "axios";
const apiUser = "https://jsonplaceholder.typicode.com/users/";

// 02 getContacts return un callback dispatch qui s'execute en async
export const getContacts =  () =>  async dispatch => {
    try {
        const res = await axios.get(apiUser);
        console.log(apiUser);
        dispatch ({
          type : "GET_CONTACTS",
          payload :res.data
        })
    } catch (err) {
        console.log("ERRO AXIOS : " , err);
    }
}

// 01 
export const deleteContacts = (id) => async dispatch =>  {
    try {
        const res = await axios.delete(apiUser + id);
        dispatch ({
            type : "DELETE_CONTACT",
            payload : id
          })  

    } catch (err) {
        console.log("ERRO AXIOS : " , err);
    }
  }
//01
  export const findOneContact = (id) =>  async dispatch =>  {
    try {
        const res = await axios.get(apiUser + id);
        dispatch ({
            type : "GET_ONE_CONTACT",
            payload : res.data
          });
    }
    catch (err) {
      console.log("ERRO AXIOS : " , err);
    }
  }

  export const addContacts = (contact) => {
    return {
      type : "ADD_CONTACT",
      payload : contact
    }
  }

  
  export const updateContact = (contact) => async dispatch => {
    const res = await axios.put(apiUser + contact.id ,contact);
    dispatch ({
      type : "UPDATE_CONTACT",
      payload : res.data
    })
  }
