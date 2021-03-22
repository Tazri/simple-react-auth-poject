import React from 'react';
import UserProvider from './components/UserProvider/UserProvider';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import './App.css'
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Destination from './components/Destination/Destination';

const App = () => {
  return (
    <UserProvider>
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/destination">
              <Destination />
          </Route>

        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;