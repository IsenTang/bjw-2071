import React from 'react'
import {
    Link,
    useHistory
} from 'react-router-dom'
import { getStorage } from '../../Common/utils';

import './sider.css';

export default function Sider({ setIsShow }) {

    let history = useHistory();
    let controlC = (e) =>{
        
        /* 禁止a标签默认操作 */
        e.preventDefault();

        // let user = getStorage('user');

        // if(!user){
        //     /* 显示modal */
        //     setIsShow(true)
        // }else{
            history.push('/a',{
                test:123
            });
        // }
    }

    return (
        <div className={'sider'}>

            <ul>
                <li><Link to='/a'>a</Link></li>
                <li><Link to='/b'>b</Link></li>
                {/* 改写成a比较好 */}
                <li><a href='' onClick={ controlC }>c</a></li>
                {/* <li><Link to='/c' onClick={ controlC }>c</Link></li> */}
                <li><Link to='/d'>d</Link></li>
            </ul>
        </div>
    )
}

