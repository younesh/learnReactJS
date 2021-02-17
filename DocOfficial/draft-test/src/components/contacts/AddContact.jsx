import React from 'react'

export default function AddContact() {
   const state = {
        nom : '',
        mail : '',
        tel : ''
    }
    const {nom, mail, tel } = state;
    return (
        <div className="add-contact">
            <form action="">
            <div class="input-group">
            <div class="input-group-prepend">
                <button class="btn btn-success" type="button">add contact</button>
            </div>
             <input Defaultvalue={nom} type="text" class="form-control" placeholder="Nom" aria-label="" aria-describedby="basic-addon1" />
             <input  value={mail} type="text" class="form-control" placeholder="Mail" aria-label="" aria-describedby="basic-addon2" />
             <input  value={tel} type="text" class="form-control" placeholder="Tel" aria-label="" aria-describedby="basic-addon3" />
 
            </div>
            </form>
        </div>
    )
}
