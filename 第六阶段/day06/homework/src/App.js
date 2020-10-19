import React, { useState } from 'react';
import './App.css';


/* components */
import Clock from './Component/Clock';
function App() {

  let [ clock , setClock] = useState({
    id:1,
    step:1,
    time:1000,
    flag:false
  })

  return (
    <div className="App">

        <div>

          控制器：
          <div>

            <select value={ clock.id } onChange={(e)=>{

              setClock({
                ...clock,
                id:e.target.value
              })
            }}>

              <option value={'1'}>定时器1</option>
              <option value={'2'}>定时器2</option>
            </select>
          </div>

          <div>
            step:
            <input value={ clock.step } onChange={(e)=>{

              setClock({
                ...clock,
                step:e.target.value
              })
            }}></input> 
          </div>

          <div>
            time:
            <input value={ clock.time }  onChange={(e)=>{

                setClock({
                  ...clock,
                  time:e.target.value
                })
            }}></input> 
          </div>

          <div>
            <button onClick={()=>{

              setClock({
                ...clock,
                flag:!clock.flag
              })
            }}>修改</button>
          </div>
        </div>
        <Clock id={1} clock={clock}></Clock>
        <Clock id={2} clock={clock}></Clock>
    </div>
  );
}

export default App;
