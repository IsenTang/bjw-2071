import React from 'react'
import { useSelector } from 'react-redux';

import './loading.css';
export default function Loading() {

    let isLoading = useSelector(state=>state.loading.isLoading);
    
    return (
        
        isLoading ? <div className='loading'>
            
            <div className='loading-content'>

            </div>
        </div> : null
    )
}
