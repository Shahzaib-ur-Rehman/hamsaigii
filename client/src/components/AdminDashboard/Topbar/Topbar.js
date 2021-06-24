import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import './topbar.css'
import axios from 'axios';
const Topbar = () => {
    const [userName,setUserName]=useState();
    const history =useHistory();
    useEffect(() => {
        axios.get('/api/users/loggedIn').then((response)=>{          
            if(response.data.auth==false) {
                history.push("/login")
            }else{
                setUserName(response.data.user[0].fullname);
            }
        }).catch((error)=>{
                console.log(error);
        })
    }, [])
  return (
    <div>
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>Hamsaigii</span>
                </div>
                <h3 className='text-uppercase'>Hi <span>{userName}</span> </h3>
                <div className='topRight'>
                    {/* <div className='topbarIconsDiv'>
                        <NotificationsIcon/>
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className='topbarIconsDiv'>
                        <MessageIcon/>
                        <span className='topbarIconBadge'>2</span>
                    </div> */}
                    <div className='topbarIconsDiv'>
                        <a><img src='https://picsum.photos/200/300' class='img_logo'></img></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Topbar;
