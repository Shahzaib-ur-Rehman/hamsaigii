import React from "react";
import { NavLink } from "react-router-dom";
import './topbar.css'
import FaceIcon from '@material-ui/icons/Face';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
const Topbar = () => {
  return (
    <div>
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>Hamsaigii</span>
                </div>
                <h3 className='text-uppercase'>Neighbour Side </h3>
                <div className='topRight'>
                    {/* <div className='topbarIconsDiv'>
                        <NotificationsIcon/>
                        <span className='topbarIconBadge'>2</span>
                    </div> */}
                    {/* <div className='topbarIconsDiv'>
                        <MessageIcon/>
                        <span className='topbarIconBadge'>2</span>
                    </div> */}
                    <div className='topbarIconsDiv'>
                        <NavLink to='/dashboard/profile'><img src='https://picsum.photos/200/300' class='img_logo'></img></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Topbar;
