import React,{ useState } from 'react';
import './App.css';

function App() {

  let [value,setValue] = useState('init-value');

  let [name,setName] = useState('isen');

  let [clock,setClock] = useState({
    id:1,
    time:1000
  })
  // let result = useState('init-value');

  return (
    <div className="App">

        <div>

          id:{ clock.id }
        </div>

        <div>

          time:{ clock.time }
        </div>
        <div>

          <button onClick={()=>{

              // setValue('after-click')

              // setName('lucy');

              setClock({ ...clock,time:2000 } )
              
          }}>click</button>
        </div>
    </div>
  );
}

export default App;
