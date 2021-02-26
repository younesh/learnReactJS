import React from 'react'
import { Link } from 'react-router-dom'

function notFound() {
    return (
        <div className="page page--not-found">
            <h2> page 404 !: ou est ce que vous allez là ?!!</h2>
            <p>
                <Link to="/"> La Home !</Link>
            </p>
        </div>
    )
}

export default notFound
