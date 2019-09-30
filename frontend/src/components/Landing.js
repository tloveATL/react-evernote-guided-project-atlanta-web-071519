
import React from 'react';
import {Link} from 'react-router-dom'

function Landing() {
    return (
        <div>
            <h1>
                Welcome to (t)LoveNotes
                <br></br>
                <Link to='/notes'>
                    Click here to enter
                </Link>
            </h1>
        </div>
    )
}

export default Landing
