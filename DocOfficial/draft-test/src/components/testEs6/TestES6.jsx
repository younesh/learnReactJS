import React, { useState, useEffect } from 'react'

function TestES6() {
    const [user, setUser] = useState({
        id: 1,
        name : "ken",
        attack :"hadouken"
    });


    useEffect(()=>{
        // console.log(user);
        const employer = {
            mat: "001",
            fullName : "don draper",
            function : "artistique director",
            departement : "creative branding"
        }

        const newEmp = { ...employer, ...{mat:`00${user.id}`, departement :"compta"}}

        console.log(" employer ", newEmp);
    })

    return (
        <div className="test-es6">
            <h2> les test es6 ... </h2>
            <section>
                 <h3> les spread class ... id = {user.id} ... </h3>
  
                 <button onClick={() => setUser({ ...user, id: user.id+2})}> increment id </button>
            </section>
        </div>
    )
}

export default TestES6
