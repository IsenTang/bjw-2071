import React from 'react'
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../Router/PrivateRoute';

export default function Content() {
    return (
        <Switch>

            <PrivateRoute path='/a' component={()=>{
                return (
                    <div>A</div>
                )
            }}/>

            <PrivateRoute path='/b' component={()=>{
                return (
                    <div>B</div>
                )
            }}/>

            <PrivateRoute path='/c' component={()=>{
                return (
                    <div>C</div>
                )
            }}/>

            <PrivateRoute path='/d' component={()=>{
                return (
                    <div>D</div>
                )
            }}/>
        </Switch>
    )
}
