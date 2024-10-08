import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import StudentDetails from './components/StudentDetails';
import EditStudent from './components/EditForm';

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

            <Route path="/student-details/:id">
              <StudentDetails />
            </Route>

            <Route path="/edit-details/:id">
              <EditStudent />
            </Route>

          </Switch>

        </div>

      </div>
    </Router>

  )
}

export default App
