import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import moment from "moment"

import "./styles/Sidebar.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul>
        <li>
          <a href="./index.html">
            <i class="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <i class="fas fa-newspaper"></i> Attendance
        </li>
        <li>
          <i class="fas fa-dollar-sign"></i> Fees Details
        </li>
        <li>
          <i class="fas fa-list-ul"></i> Assignments
        </li>
        <li>
          <i class="far fa-question-circle"></i> Examination
        </li>
        <li>
          <i class="fas fa-scroll"></i> Results
        </li>
        <li>
          <a href="./messages.html">
            <i class="far fa-envelope"></i> Messages
          </a>
        </li>
        <li>
          <i class="fas fa-gift"></i> Opportunities
        </li>
        <li>
          <i class="fas fa-code"></i> Practicals
        </li>
        <li>
          <i class="far fa-check-circle"></i> Approved Application
        </li>
        <li>
          <i class="far fa-user"></i> Faculty
        </li>
      </ul>
    </div>
  );

  return (
    <div className="sidebar">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <i className="fas fa-chevron-left"></i>
          </Button>
          <Drawer
            className="drawer"
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

      <div className="container pageTitle">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <ul>
              <li>
                <i className="fas fa-home"></i> Hey, {props.userName}
              </li>
              <li className="text-right">
                Today: <span className="date">{moment().format("MMM Do YY")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
