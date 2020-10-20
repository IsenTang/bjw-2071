import React from 'react'

export const routerConfig = [
    {
        path:'/a',
        component:()=>{
            return (
                <div>A</div>
            )
        },
        exact:true
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
];