import { useState,useEffect } from 'react';

export function useTest(){

    
    return useState('init-value');
}

export function useTime(){

  useEffect(()=>{

    console.log(' in effect ');
    let timer = setInterval(()=>{

      console.log('time');
    },1000)

    return ()=>{

      console.log(' in return ');
      if(timer){

        clearInterval(timer);
      }
    }
  },[])
}