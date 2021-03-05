export const getContacts = () => {
  return {
    type : "GET_CONTACTS"
  }
}

export const deleteContacts = (id) => {
    return {
      type : "DELETE_CONTACT",
      payload : id
    }
  }

//01
  export const addContacts = (contact) => {
    return {
      type : "ADD_CONTACT",
      payload : contact
    }
  }