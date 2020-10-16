import React,{ useState,useEffect } from 'react'


export default function Comp() {

    const [ count,setCount ] = useState(0);

    const [ name,setName ] = useState('isen');

    // if(name === 'isen'){
        useEffect(()=>{

            console.log('useEffect');
        });
    // }

    const [ num,setNum ] = useState(1);

    return (
        <div>
        

            <div>

                
            </div>
        </div>
    )
}
