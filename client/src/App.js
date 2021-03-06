import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// bootstrap
import "jquery/dist/jquery.slim";
import "popper.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

// fontawesome package
import "@fortawesome/fontawesome-free/css/all.css";
import "react-toastify/dist/ReactToastify.min.css";

// tailwind
import "tailwindcss/dist/tailwind.min.css"

// containers
import Login from "./containers/Login";
import PrivateRoutes from "./containers/PrivateRoutes";

import "./App.css";

import isAuthenticated from "./helpers/isAuthenticated";
import PageNotFound from "./containers/404";

function PrivateRoute({ component: Component, path, ...rest }) {
  return (
    <Route
      path={path}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
export default class App extends Component {
  componentDidMount() {
    // check the jwt token and it its expired then remove the jwt toke from local storage
  }
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: isAuthenticated(),
    };
  }

  login = (token) => {
    localStorage.setItem("access-token", token);

    this.setState({
      isAuthenticated: true,
    });
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/admin" component={PrivateRoutes}/>
          <Route
            exact
            path="/"
            render={(props) =>
              this.state.isAuthenticated ? (
                <Redirect to="/admin" />
              ) : (
                <Login login={this.login} />
              )
            }
          />
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
