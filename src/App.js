import React, { useContext } from 'react';
import UserProvider from './components/UserProvider/UserProvider';
import { BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom'
import Home from './components/Home/Home';
import './App.css'
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Destination from './components/Destination/Destination';
import Media from './components/Media/Media';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';

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

          <PrivateRoute path="/destination">
              <Destination />
          </PrivateRoute>

          <PrivateRoute path="/media/:media">
            <Media />
          </PrivateRoute>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;