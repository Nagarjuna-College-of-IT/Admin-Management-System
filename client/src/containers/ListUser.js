import React, { Component } from "react";

// componentns
import "../components/styles/ListUser.css";
import StatusCard from "../components/StatusCard";
import SearchForm from "../components/SearchForm";
import UserFilterer from "../components/UserFilterer";
import UserCardLists from "../components/UserCardLists";

// packages
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import Axios from "axios";

export default class ListUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: "",
      admin: [],
      adminDetails: [],
      studentDetails: [],
      teacherDetails: [],
    };
  }

  getAllUser = (userType, program, semester, group, reported, blacklisted) => {
    this.setState({
      userType,
    });

    const data = localStorage.getItem("access-token");
    const decoded = jwtDecode(data);
    if (userType === "admin") {
      Axios.get("http://localhost:8080/api/admin/accounts/get-admin", {
        headers: { _id: decoded._id, Authorization: data },
      })
        .then((res) => {
          this.setState({
            adminDetails: res.data.adminDetails,
          });
        })
        .catch((err) => {
          if (err && err.response && err.response.status)
            toast.error(err.response.data.msg);
        });
    }

    if (userType === "student") {
      Axios.get("http://localhost:8080/api/admin/accounts/get-student", {
        headers: { _id: decoded._id, Authorization: data },
      })
        .then((res) => {
          this.setState({
            studentDetails: res.data.studentDetails,
          });
          if (program) {
            if (semester) {
              const students = res.data.studentDetails.filter(
                (data) =>
                  data.semester_name === semester &&
                  data.program_name === program
              );
              this.setState({
                studentDetails: students,
              });
            } else {
              const students = res.data.studentDetails.filter(
                (data) => data.program_name === program
              );
              this.setState({
                studentDetails: students,
              });
            }
          }
        })
        .catch((err) => {
          if (err && err.response && err.response.status)
            toast.error(err.response.data.msg);
        });
    }

    if (userType === "teacher") {
      Axios.get("http://localhost:8080/api/admin/accounts/get-teacher", {
        headers: { _id: decoded._id, Authorization: data },
      })
        .then((res) => {
          this.setState({
            teacherDetails: res.data.teacherDetails,
          });
          if (program) {
            const teachers = res.data.teacherDetails.filter((data) =>
              data.program_name.includes(program)
            );
            this.setState({
              teacherDetails: teachers,
            });
          }
        })
        .catch((err) => {
          if (err && err.response && err.response.status)
            toast.error(err.response.data.msg);
        });
    }
  };

  getFilterName = (name) => {
    // if user is admin
    if(this.state.userType === "admin"){
      const user = this.state.adminDetails.filter(
        (data) => data.full_name === name
      );
  
      this.setState({
        adminDetails: user,
      });
    }

    // if user is student
    if(this.state.userType === "student"){
      const user = this.state.studentDetails.filter(
        (data) => data.full_name === name
      );
  
      this.setState({
        studentDetails: user,
      });
    }

    //if the usertype is teacher
    if(this.state.userType === "teacher"){
      const user = this.state.teacherDetails.filter(
        (data) => data.full_name === name
      );
  
      this.setState({
        teacherDetails: user,
      });
    }
  };
  render() {
    return (
      <div className="userList">
        {/* <!-- status cards starts --> */}
        <StatusCard />
        {/* <!-- status card ends --> */}

        <div className="listOfUser container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
              {/* search user by name */}
              <SearchForm filterByName={this.getFilterName} />
              {/* filter by groups */}
              <div className="filterGroup">
                <UserFilterer getUsers={this.getAllUser} />
              </div>
            </div>

            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 userCardLists">
              <UserCardLists
                users={
                  this.state.userType === "admin"
                    ? this.state.adminDetails
                    : this.state.userType === "student"
                    ? this.state.studentDetails
                    : this.state.teacherDetails
                }
                userType={this.state.userType}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
