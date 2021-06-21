import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import "./sidebar.css";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
const Sidebar = () => {
  const [manageSocietyColor, setManageSocietyColor] = useState("#70a19e");
  const [trackContractColor, settrackContractColor] = useState("");
  const [feedBackColor, setfeedBackColor] = useState("");
  const [logoutColor, setlogoutColor] = useState("");
  const history = useHistory();
  const logoutuser = () => {
    axios
      .get("/api/users/logout")
      .then((response) => {
        console.log(response);
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeColor = (id) => {
    if (id == 1) {
      setManageSocietyColor("#70a19e");
      settrackContractColor("White");
      setfeedBackColor("White");
      setlogoutColor("White");
    } else if (id == 2) {
      setManageSocietyColor("White");
      settrackContractColor("#70a19e");
      setfeedBackColor("White");
      setlogoutColor("White");
    } else if (id == 3) {
      setManageSocietyColor("White");
      settrackContractColor("White");
      setfeedBackColor("#70a19e");
      setlogoutColor("White");
    } else if (id == 4) {
      setManageSocietyColor("White");
      settrackContractColor("White");
      setfeedBackColor("White");
      setlogoutColor("#70a19e");
    }
  };
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle fw-bold'>Admin Side</h3>
          <ul className='sidebarList'>
            <li
              className='sidebarListItem '
              style={{ backgroundColor: manageSocietyColor }}>
              <HomeIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(1);
                }}>
                Manage Society
              </NavLink>
            </li>
            <li
              className='sidebarListItem'
              style={{ backgroundColor: trackContractColor }}>
              <TrackChangesIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/trackcontract'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(2);
                }}>
                Track Contract
              </NavLink>
            </li>
            <li
              className='sidebarListItem'
              style={{ backgroundColor: feedBackColor }}>
              <FeedbackIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/feedback'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(3);
                }}>
                Feedback & Complain
              </NavLink>
            </li>
            {/* <li className='sidebarListItem'>
                        <PersonIcon className='sidebarIcons'/>
                        <NavLink to='/dashboard/profile' className='sidebar_navlink'> Profile</NavLink>
                        </li> */}
            <li
              className='sidebarListItem'
              onClick={() => {
                changeColor(4);
              }}
              style={{ backgroundColor: logoutColor }}>
              <PowerSettingsNewIcon className='sidebarIcons' />
              <a
                className='sidebar_navlink'
                onClick={() => {
                  logoutuser();
                }}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
