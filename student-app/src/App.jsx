import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';

const App = () => {
  return (
    <Router>
      
      <div className="App">
        <Navbar />
      
        <div>
        <Switch>
          
        
          <Route exact path="/">
              <Home />
          </Route>

          <Route exact path="/Create" >
          
              <Create />
          </Route>
              
          {/* <Route path="/Blog-details/:id">
              <BlogDetails/>
          </Route> */}
            
          </Switch>
          
        </div>
        
      </div>
    </Router>

  )
}

export default App
