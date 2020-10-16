import React,{ useState,useEffect } from 'react'

export default function Child({name}) {

    let [ value,setValue ] = useState(0);

    useEffect(()=>{

        console.log(' child effect ');
        let timer = setInterval(()=>{

            console.log('time');
         },1000);

        return ()=>{

            console.log(' in return ');
            clearInterval(timer);
        }
    },[])

    return (
        <div>
            Child { value }

            <div>

                <button onClick={
                    ()=>{
                        setValue(Math.random())
                    }
                }>child</button>
            </div>
        </div>
    )
}


