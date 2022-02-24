import React from 'react';
import {Link} from 'react-router-dom';

export function Nav(){

    return(
        <ul>
           
            <li>
                <Link to="/comments">Comments</Link>
            </li>
        </ul>
    )
}