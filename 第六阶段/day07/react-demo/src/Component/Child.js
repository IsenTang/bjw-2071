import React from 'react'

import { useMousePosition } from '../Hook/useMousePosition';

import './style.css';

export default function Child() {

    let {x,y} = useMousePosition();
    return (
        <div className={'child'}>
           child : x: {x} + y:{y}
        </div>
    )
}
