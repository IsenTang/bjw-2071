import React,{ useMemo, useCallback } from 'react'

export default function Child({name}) {

    const nameComponent = useMemo(()=>{

        console.log(' use Memo ');
        return (
            <div>{name}</div>
        )
     },[ name ]);

    const callBack = useCallback(()=>{

        return name + 1
        
    },[name])

    return (
        <div>
            Child
            <div>{ nameComponent }</div>

            <div> { callBack()}</div> 
        </div>
    )
}


