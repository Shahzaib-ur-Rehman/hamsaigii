import React from "react";
import './dashboard.css';
import {BrowserRouter as Router,HashRouter,Switch, Route} from 'react-router-dom';
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Home from "./Pages/Home/Home";
import RegisterNeighbor from "./Pages/Notifications/Notifications";
import SignContract from "./Pages/AddRequest/AddRequest";
import FeedBack from "./Pages/feedback/FeedBack";
import AllContracts from "./Pages/AllContract/AllContracts";
import Logout from "./Pages/Logout";
import RejectedContracts from "./Pages/RejectedContracts/RejectedContracts";
import Profle from "./Pages/Profile/Profle";
import AllRequest from "./Pages/AllRequests/AllRequest";
import MyRequest from "./Pages/MyRequests/MyRequest";
import SendInvitation from "./Pages/SendInvitations/SendInvitation";
import Allinvitations from "./Pages/AllInvitations/Allinvitations";
const Dashboard = () => {
  return (
      <Router>
        <Topbar/>
          <div className='coontainer'>
            <Sidebar/>
            <div className='other'>
            <Switch>
                <Route exact path='/dashboard' component={Home}></Route>
                <Route exact path='/dashboard/profile' component={Profle}></Route>
                <Route exact path='/dashboard/registerNeighbor' component={RegisterNeighbor}></Route>
                <Route exact path='/dashboard/putReguest' component={SignContract}></Route>
                <Route exact path='/dashboard/getallrequest' component={AllRequest}></Route>
                <Route exact path='/dashboard/getmyrequest' component={MyRequest}></Route>
                <Route exact path='/dashboard/allContracts' component={AllContracts}></Route>
                <Route exact path='/dashboard/rejectedContracts' component={RejectedContracts}></Route>
                <Route exact path='/dashboard/sendInvitation' component={SendInvitation}></Route>
                <Route exact path='/dashboard/allInvitation' component={Allinvitations}></Route>
                <Route exact path='/dashboard/feedBack' component={FeedBack}></Route>
                <Route exact path='/dashboard/logout' component={Logout}></Route>
            </Switch>
            </div>
          </div>
      </Router>
  )    
};

export default Dashboard;
