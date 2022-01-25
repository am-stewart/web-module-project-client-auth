import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/friendlist'>Friend List</Link>
          <Link to='/addfriend'>Add Friend</Link>
          <Link to='/logout'>Logout</Link>
        </nav>
      </header>
      <Switch>
        <Route path='/addfriend' component={AddFriend} />
        <Route path='/friendlist' component={FriendList} />
        <Route path='/logout' component={Logout} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
