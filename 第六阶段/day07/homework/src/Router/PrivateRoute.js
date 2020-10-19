import React from 'react'
import _ from 'lodash';
import { // hash router 与 browser router
    Route,
    Redirect
} from 'react-router-dom';

import { getStorage } from '../Common/utils';

export default function PrivateRoute({ component: Component , ...rest }) {

    let user = getStorage('user');

    let isAuth = false;

    /* 不需要登陆验证的路由 */
    const noAuthNeedPaths = ['/a','/b'];

    /* 跳转路由 */
    const redirectAddress = '/a';

    /* 不需要登陆验证 */
    if(_.includes(noAuthNeedPaths,rest.path)){
        isAuth = true;
    }else{
        /* 如果已经登陆 */
        if(user){
            isAuth = true;
        }
    }

    return (
        <Route {...rest} render={()=>{

            return (
                isAuth ? <Component></Component> : <Redirect to={ redirectAddress }></Redirect>
            )
        }}/>

    )
}
