import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './screens/Home';
import Seating from './screens/Seating'
import WelcomeScreen from './screens/WelcomeScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './screens/Cart';



function App() {
  return (
    <Router>
        <Switch>
          <Route path="/welcome" component={WelcomeScreen} />
          <Route path="/seating" component={Seating} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
