import React from 'react'

function Child({name}) {

    console.log('Child');
    return (
        <div>
            Child
            <div>{name}</div>
        </div>
    )
}

export default React.memo(Child,(pre,next)=>{

    console.log('pre',pre.name);
    console.log('next',next.name);

    return pre.name === next.name;
 });

