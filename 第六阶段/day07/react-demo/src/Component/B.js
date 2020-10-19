import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function B() {
    return (
        <div>
            <div>B</div>
            
            <div>

                <div>

                    <ul>
                        <li>
                            <Link to={'/b/index'}>home</Link>
                        </li>
                        <li>
                            <Link to={'/b/helloworld'}>helloworld</Link>
                        </li>
                    </ul>
                </div>

                <div>

                    <Switch>

                        <Route path={'/b/index'}>
                            <div>
                                b home
                            </div>
                        </Route>

                        <Route path={'/b/helloworld'}>
                            <div>
                                helloworld
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
