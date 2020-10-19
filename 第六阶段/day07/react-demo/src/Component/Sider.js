import React from 'react';
import {
    Redirect,
    Link
} from "react-router-dom";

export default function Sider() {
    return (
        <div className={'sider'}>
            <ul>

                <li>

                    <Link to='/a'>A</Link>
                </li>

                <li>

                    <Link to='/b'>B</Link>
                </li>

            </ul>
        </div>
    )
}
