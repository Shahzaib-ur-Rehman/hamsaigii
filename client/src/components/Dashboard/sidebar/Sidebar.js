import React, { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import PersonIcon from "@material-ui/icons/Person";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import BallotIcon from "@material-ui/icons/Ballot";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PostAddIcon from "@material-ui/icons/PostAdd";
import axios from "axios";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [homeBgColor, sethomeBgColor] = useState("#70a19e");
  const [profileColor, setProfilelColor] = useState("");
  const [addRequestColor, setAddRequestColor] = useState("");
  const [allRequestColor, setAllRequestColor] = useState("");
  const [myRequestColor, setmyRequestColor] = useState("");
  const [notificationColor, setnotificationColor] = useState("");
  const [trackContractColor, settrackContractColor] = useState("");
  const [rejectedContractColor, setrejectedContractColor] = useState("");
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
      sethomeBgColor("#70a19e");
      setProfilelColor("white");
      setAddRequestColor("white");
      setAllRequestColor("White");
      setmyRequestColor("White");
      setnotificationColor("White");
      settrackContractColor("White");
      setrejectedContractColor("White");
      setfeedBackColor("White");
      setlogoutColor("White");
    } else if (id == 2) {
      sethomeBgColor("White");
      setProfilelColor("#70a19e");
      setAddRequestColor("white");
      setAllRequestColor("White");
      setmyRequestColor("White");
      setnotificationColor("White");
      settrackContractColor("White");
      setrejectedContractColor("White");
      setfeedBackColor("White");
      setlogoutColor("White");
    } else if (id == 3) {
      sethomeBgColor("White");
      setProfilelColor("White");
      setAddRequestColor("#70a19e");
      setAllRequestColor("White");
      setmyRequestColor("White");
      setnotificationColor("White");
      settrackContractColor("White");
      setrejectedContractColor("White");
      setfeedBackColor("White");
      setlogoutColor("White");
    } else if (id == 4) {
      sethomeBgColor("White");
      setProfilelColor("White");
      setAddRequestColor("White");
      setAllRequestColor("#70a19e");
      setmyRequestColor("White");
      setnotificationColor("White");
      settrackContractColor("White");
      setrejectedContractColor("White");
      setfeedBackColor("White");
      setlogoutColor("White");
    } else if (id == 5) {
      sethomeBgColor("White");
      setProfilelColor("White");
      setAddRequestColor("White");
      setAllRequestColor("White");
      setmyRequestColor("#70a19e");
      setnotificationColor("White");
      settrackContractColor("White");
      setrejectedContractColor("White");
      setfeedBackColor("White");
      setlogoutColor("White");
    } else if (id == 6) {
      sethomeBgColor("White");
      setProfilelColor("White");
      setAddRequestColor("White");
      setAllRequestColor("White");
      setmyRequestColor("White");
      setnotificationColor("#70a19e");
      settrackContractColor("White");
      setrejectedContractColor("White");
      setfeedBackColor("White");
      setlogoutColor("White");
    } else if (id == 7) {
      sethomeBgColor("White");
      setProfilelColor("White");
      setAddRequestColor("White");
      setAllRequestColor("White");
      setmyRequestColor("White");
      setnotificationColor("White");
      settrackContractColor("#70a19e");
      setrejectedContractColor("White");
      setfeedBackColor("White");
      setlogoutColor("White");
    } else if (id == 8) {
      sethomeBgColor("White");
      setProfilelColor("White");
      setAddRequestColor("White");
      setAllRequestColor("White");
      setmyRequestColor("White");
      setnotificationColor("White");
      settrackContractColor("White");
      setrejectedContractColor("#70a19e");
      setfeedBackColor("White");
      setlogoutColor("White");
    } else if (id == 9) {
      sethomeBgColor("White");
      setProfilelColor("White");
      setAddRequestColor("White");
      setAllRequestColor("White");
      setmyRequestColor("White");
      setnotificationColor("White");
      settrackContractColor("White");
      setrejectedContractColor("White");
      setfeedBackColor("#70a19e");
      setlogoutColor("White");
    } else if (id == 10) {
      sethomeBgColor("White");
      setProfilelColor("White");
      setAddRequestColor("White");
      setAllRequestColor("White");
      setmyRequestColor("White");
      setnotificationColor("White");
      settrackContractColor("White");
      setrejectedContractColor("White");
      setfeedBackColor("White");
      setlogoutColor("#70a19e");
    }
  };

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle fw-bold'>Neighbour Side</h3>
          <ul className='sidebarList'>
            <li
              className={`sidebarListItem`}
              style={{ backgroundColor: homeBgColor }}>
              <HomeIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(1);
                }}>
                Home
              </NavLink>
            </li>
            <li
              className='sidebarListItem'
              style={{ backgroundColor: profileColor }}>
              <PersonIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/profile'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(2);
                }}>
                Profile
              </NavLink>
            </li>

            <li className='sidebarListItem'  style={{ backgroundColor: addRequestColor }}>
              <PostAddIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/putReguest'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(3);
                }}>
                Add Request
              </NavLink>
            </li>
            <li className='sidebarListItem' style={{ backgroundColor: allRequestColor }}>
              <BallotIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/getallrequest'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(4);
                }}>
                All Request
              </NavLink>
            </li>
            <li className='sidebarListItem' style={{ backgroundColor: myRequestColor }}>
              <BallotIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/getmyrequest'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(5);
                }}>
                My Request
              </NavLink>
            </li>
            <li className='sidebarListItem' style={{ backgroundColor: notificationColor }}>
              <NotificationsActiveIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/registerNeighbor'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(6);
                }}>
                Notifications
              </NavLink>
            </li>
            <li className='sidebarListItem' style={{ backgroundColor: trackContractColor }}>
              <TrackChangesIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/allContracts'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(7);
                }}>
                Track Contract
              </NavLink>
            </li>
            <li className='sidebarListItem'  style={{ backgroundColor: rejectedContractColor }}>
              <TrackChangesIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/rejectedContracts'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(8);
                }}>
                Rejected Contracts
              </NavLink>
            </li>
            <li className='sidebarListItem'  style={{ backgroundColor: rejectedContractColor }}>
              <TrackChangesIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/rejectedContracts'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(8);
                }}>
                Send Invitations
              </NavLink>
            </li>
            <li className='sidebarListItem'  style={{ backgroundColor: rejectedContractColor }}>
              <TrackChangesIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/rejectedContracts'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(8);
                }}>
                All Invitations
              </NavLink>
            </li>
            <li className='sidebarListItem' style={{ backgroundColor: feedBackColor }}>
              <FeedbackIcon className='sidebarIcons' />
              <NavLink
                to='/dashboard/feedBack'
                className='sidebar_navlink'
                onClick={() => {
                  changeColor(9);
                }}>
                Feed Back & Complain
              </NavLink>
            </li>

            <li
              className='sidebarListItem'
              onClick={() => {
                changeColor(10);
              }} style={{ backgroundColor: logoutColor }}>
              <PowerSettingsNewIcon className='sidebarIcons' />
              <a
                to='/'
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
