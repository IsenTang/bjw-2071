import React from 'react'
import A from '../Component/A';

export const routerConfig = [
    {
        path:'/a/:id',
        component:A
    },
    {
        path:'/b',
        component:()=>{

            return (
                <div>B</div>
            )
        }
    },
    {
        path:'/c',
        component:()=>{
            return (
                <div>C</div>
            )
        }
    },
    {
        path:'/d',
        component:()=>{
            return (
                <div>D</div>
            )
        }
    },
    {
        path:'*',
        component:()=>{
            return (
                <div>404</div>
            )
        }
    },
];