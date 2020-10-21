import React from 'react';
import _ from 'lodash';
import { BrowserRouter as Router ,Switch } from 'react-router-dom';

import './App.css';

import { routerConfig } from './Router/index';
import PrivateRouter from './Common/PrivateRoute';

function App () {

   function renderRouter (){

      return _.map(routerConfig,(item)=>{

         return (

            <PrivateRouter { ...item }/>
         );
      });
   }
   return (

      <Router>
         <div className="App">
            <Switch>
               { renderRouter()}
            </Switch>
         </div>
      </Router>
   );
}

export default App;
