import React,{ useState,useEffect } from 'react';
import './App.css';

function App() {

  let [value,setValue] = useState('init-value');

  let [name,setName] = useState('isen');

  let [clock,setClock] = useState({
    id:1,
    time:1000
  })

  let [count,setCount] = useState(0);
  // let result = useState('init-value');
  
  useEffect(()=>{

    console.log('count useEffect');
    document.title = `You click ${count} times`
  },[count])

  useEffect(()=>{

    console.log(' name useEffect');
    console.log(name);
   
  },[count,name])

  useEffect(()=>{

    let timer = setInterval(()=>{

      console.log('time');
    },1000)

    return ()=>{

      console.log(' in return ');
      if(timer){

        clearInterval(timer);
      }
    }
  },[])


  return (
    <div className="App">
{/* 
        <div>

          id:{ clock.id }
        </div>

        <div>

          time:{ clock.time }
        </div> */}

        <div>

          { name }
        </div>

        <div>

          count:{ count }
        </div>
        <div>

          <button onClick={()=>{

              setCount((v)=>{
                return v+1;
              })

          }}>count</button>
        </div>

        <div>

          <button onClick={()=>{

              setName(name+1)

          }}>name</button>
        </div>
    </div>
  );
}

export default App;
