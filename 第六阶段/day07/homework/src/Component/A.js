import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

export default function A() {

    let params = useParams();

    let location = useLocation()
    console.log(location);

    // console.log('id ===>',id);
    // console.log('name ===>',name);

    console.log(params);
    return (
        <div>
            A
        </div>
    )
}
