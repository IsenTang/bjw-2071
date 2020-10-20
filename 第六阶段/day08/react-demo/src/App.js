import React from 'react';
import {
  BrowserRouter as Router, // hash router 与 browser router
  Switch,
  Route,
  Link
} from 'react-router-dom';


import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
          <ul>

            <li>

              <Link to='/a'>A</Link>
            </li>
          </ul>

          <Switch>

              <Route path='/a/' exact={true} strict={true}>

                  <div>
                    <div>A</div>

                    {/* <Link to='/a/index'>nest</Link>

                    <Switch>

                      <Route path='/a/index'>

                        <div>  这是嵌套 </div>
                      </Route>
                    </Switch> */}
                  </div>

              </Route>
          </Switch>
         
      </div>
    </Router>
  
  );
}

export default App;
