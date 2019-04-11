import React, { Component } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FriendList from "./components/FriendList ";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendList} />
        </div>
      </Router>
    );
  }
}

export default App;
