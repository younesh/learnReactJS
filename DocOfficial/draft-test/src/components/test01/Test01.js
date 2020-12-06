import React from 'react';

function Test01() {
    const  formatName = (user) => {
        return 'salam   ' + user.firstName + ' ' + user.lastName;
    }
    const user = {
        firstName: 'younes',
        lastName: 'BATAL'
    };
    return (
       /* debut du code JSX  */
        <section className="Test01 test">
            <h4> test 01 :  {formatName(user)}  </h4> {/* les { } permer d'executer du js dans des chaine JSX ... ( appler une function, operation math ... )  */}
        </section>
     /* Fin du code JSX  */
    );
}

export default Test01;