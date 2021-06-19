import React, { Profiler } from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Topbar from '../AdminDashboard/Topbar/Topbar';
import Sidebar from '../AdminDashboard/sidebar/Sidebar';
import ManageSociety from './Pages/ManageSociety/ManageSociety';
import TrackContract from './Pages/TrackContract/TrackContract';
import FeedBack from './Pages/FeedBack/FeedBack';
import Profile from '../Dashboard/Pages/Profile/Profle';
import Logout from './Pages/Logout';
const AdminDashoard = () => {
    return (
        <Router>
          <Topbar/>  
          <div className='coontainer'>
            <Sidebar/>
            <div className='other'>
              <Switch>
                <Route exact path='/dashboard' component={ManageSociety}></Route>
                <Route exact path='/dashboard/trackcontract' component={TrackContract}></Route>
                <Route exact path='/dashboard/feedback' component={FeedBack}></Route>
                {/* <Route exact path='/dashboard/profile' component={Profile}></Route> */}
                <Route exact path='/dashboard/logout' component={Logout}></Route>
                
              </Switch>
            </div>
          </div>
      </Router>
    )
}

export default AdminDashoard
