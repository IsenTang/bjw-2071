import React from 'react'

import { useTest,useTime } from './test';

export default function Comp() {

    let [ test, setTest ] = useTest();

    useTime();
    return (
        <div>
            { test }

            <div>

                <button onClick={()=>{

                    setTest('componet');
                }}> comp </button>
            </div>
        </div>
    )
}
