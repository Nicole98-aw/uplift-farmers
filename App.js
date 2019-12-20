import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import Navbar from './src/Components/Navbar';
import Home from './src/Components/Home';
import About from './src/Components/About';
import Contact from './src/Components/Contact';
import SignUp from './src/Components/SignUp';
import Login from './src/Components/Login';
import Dashboard from './src/Components/Dashboard';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}
export default App;
