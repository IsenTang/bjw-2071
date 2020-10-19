import React from 'react';

import { Route,Redirect } from 'react-router-dom'

export default function PrivateRouter({ component: Component , ...rest }) {

    let user = localStorage.getItem('user');

    let auth = true;

    if(user){
        auth = true;
    }

    if(rest.path === '/login'){
        auth = true;
    }

    return (
        
        <Route {...rest} render={ ()=>{

            return (

                auth ? <Component/> : <Redirect to='/login'></Redirect>
            )

        }} ></Route>
            
    )
}
