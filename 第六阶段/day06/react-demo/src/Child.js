import React,{ useMemo, useCallback } from 'react'

export default function Child({name}) {

    const nameValue = useMemo(()=>{

        console.log(' use Memo ');
        return name + 1
     },[ name ]);

    const callBack = useCallback(()=>{

        return name + 1
        
    },[name])

    return (
        <div>
            Child
            <div>{ nameValue }</div>

            <div> { callBack()}</div> 
        </div>
    )
}


