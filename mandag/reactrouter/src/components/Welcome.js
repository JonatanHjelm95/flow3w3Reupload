import React from 'react';
import { NavLink } from "react-router-dom";


const Welcome = () => {
    return (
        <div>
            <p>
                Welcome to our friends site
        </p>

            <NavLink to="/all">All users</NavLink>

        </div>
    );
}

export default Welcome;