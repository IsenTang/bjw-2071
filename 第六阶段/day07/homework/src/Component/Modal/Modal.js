 /* eslint-disable */
import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './modal.css';

export default function Modal({ isShow,setIsShow }) {

    let history = useHistory();
    
    return (

        isShow ? (<div className='modal-container'>
            <div className='modal-content'>
                
                <span>你需要先登录</span>

                <button onClick={()=>{

                    setIsShow(!isShow)
                    history.push('/a');

                }}> 确认 </button>
            </div>
        </div>) : null
        
        
    )
}
