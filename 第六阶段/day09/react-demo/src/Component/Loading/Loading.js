import React from 'react';
import { useSelector } from 'react-redux';
import './loading.css';

/* assets */
import loadingImage from '../../Assets/loading.gif';

export default function Loading () {

   const isShow = useSelector(state => state.loading.isLoading);
   return (

      isShow ?
         <div className='loading'>

            <img className='loading-container' src= { loadingImage } alt='loading'></img>
         </div> : null
   );
}
