 /* eslint-disable */
import React, { useState,useEffect,useRef } from 'react'

export default function Clock({ id, clock }) {

    let [ count,setCount ] = useState(0);

    let [ step,setStep ] = useState(1);

    let [ time,setTime ] = useState(1000);

    let [isStart, setIsStart ] = useState(false);

    let countRef = useRef(count);

    let stepRef = useRef(step);

    let timeRef = useRef(time);

    useEffect(()=>{
        countRef.current = count;
    },[count])

    useEffect(()=>{
        stepRef.current = step;
    },[step])

    useEffect(()=>{
        timeRef.current = time;
    },[time])


    useEffect(()=>{

        if(clock.id == id){
            
            console.log('in')
            setStep(Number(clock.step));

            setTime(Number(clock.time));
        } 
        
    },[clock.flag])

    useEffect(() => {
        
        let timer;

        if(isStart){
            timer = setInterval(()=>{

                setCount(countRef.current + stepRef.current)
            },timeRef.current)
        }

        return () => {
            if(timer){

                clearInterval(timer);
            }
        }
    }, [isStart,step,time]);


    return (
        <div>
            定时器{id}: 
            <div>
                { count }
            </div>
            <div>
                <button onClick={()=>{

                    setIsStart(!isStart)
                }}> { isStart ? 'STOP':'START'}</button>
            </div>
        </div>
    )
}
