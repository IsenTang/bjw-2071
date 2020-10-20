import React from 'react'
import { Switch } from 'react-router-dom';
import _ from 'lodash';
import PrivateRoute from '../../Router/PrivateRoute';

import { routerConfig } from '../../Router/index';

export default function Content() {

    const renderRouter = ()=>{

        return _.map(routerConfig,(item)=>{

            return (<PrivateRoute {...item}/>)
        })
    }

    return (
        <Switch>
                { renderRouter() }
        </Switch>
    )
}
