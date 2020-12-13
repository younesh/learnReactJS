import React from 'react'
import PropTypes from 'prop-types'

function NavContact(props) {

    return (
        <div className="d-flex nav-contact">
          <span> Nom list: { props.listName }  | </span>
          <span> nbr de contact: { props.user.length } </span>

        </div>
    )
}

NavContact.defaultProps = {
    user : [],
    listName :"default list Name .. " // 520
}

NavContact.propTypes = {
    listName : PropTypes.string.isRequired,
}

export default NavContact;
