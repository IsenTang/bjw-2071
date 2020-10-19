import React from 'react';
import {
    Redirect,
    Link,
    useHistory
} from "react-router-dom";

export default function Sider() {

    let history = useHistory();


    return (
        <div className={'sider'}>
            <ul>

                <li>

                    <Link to='/a'>A</Link>
                </li>

                <li>

                    <Link to='/b'>B</Link>
                </li>

                <li>

                    <Link to='/c'>C</Link>
                </li>

            </ul>

            <button onClick={()=>{

                history.push('/a');

            }}> history </button>
        </div>
    )
}
