import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import ListUser from "./ListUser";
import Register from "./Register";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// packages
import axios from "axios";
import jwtDecode from "jwt-decode";

export default class PrivateRoutes extends Component {
  componentDidMount() {
    const data = localStorage.getItem("access-token");

    const decoded = jwtDecode(data);
    axios
      .get("http://localhost:8080/api/admin/accounts/get-current-user", {
        headers: { _id: decoded._id, Authorization: data },
      })
      .then((res) => {
        this.setState({
          userData: res.data
        })
      })
      .catch((err) => {});
    // this.setState({
    //   userData: JSON.parse(data),
    // });
  }
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        detailData: {}
      },
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar userName={this.state.userData.detailData.full_name} />
        <Sidebar userName={this.state.userData.detailData.full_name} />
        <Switch>
          <Route exact path="/admin" component={Home} />
          <Route path="/admin/user-list" component={ListUser} />
          <Route path="/admin/register-admin" component={Register} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
