// 01 
import axios from "axios";
const apiUser = "https://jsonplaceholder.typicode.com/users/";

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

export const deleteContacts = (id) => {
    return {
      type : "DELETE_CONTACT",
      payload : id
    }
  }

  export const addContacts = (contact) => {
    return {
      type : "ADD_CONTACT",
      payload : contact
    }
  }