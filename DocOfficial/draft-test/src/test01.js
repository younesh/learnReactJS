import React from 'react';
function formatName(user) {
    return 'salut   ' + user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'younes',
    lastName: 'BATAL'
};
function Test01() {
    return (
       /* debut du code JSX  */
        <section>
            <h3> test 01 :   {formatName(user)}  </h3> {/* les { } permer d'executer du js dans des chaine JSX ... ( appler une function, operation math ... )  */}
        </section>
     /* Fin du code JSX  */
    );
}

export default Test01;