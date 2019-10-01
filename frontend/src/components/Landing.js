
import React from 'react';
import {Link} from 'react-router-dom'

function Landing() {
    return (
        <div>
            <h1 className="landing">
            <img src={ require('../assets/images/logo.png') } />
                Welcome Back
                <br></br>
                <Link to='/notes'>
                    <button className="landing-btn">
                    <text style={{color: 'black'}}>
                    Click here to enter
                    </text>
                    </button>
                </Link>
            </h1>
        </div>
    )
}

export default Landing
