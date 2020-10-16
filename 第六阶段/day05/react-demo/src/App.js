import React from 'react';
import './App.css';

/* components */
import Home from './Features/Home/Home';
import Login from './Features/Login/Login';

function App () {

   return (
      <div className="App">
         <Home></Home>
         <Login></Login>
      </div>
   );
}

export default App;
