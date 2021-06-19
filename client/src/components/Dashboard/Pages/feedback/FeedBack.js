import axios from "axios";
import React, { useEffect,useState } from "react";
import "./feedback.css";
import FeedBackComponet from "./FeedBackComponet";
const FeedBack = () => {
  const [userinfo,setUserInfo]=useState('');
  useEffect(() => {
    axios.get('/api/users/loggedIn').then((response)=>{    
      // setUserInfo(response.data.user);  
      // console.log(response.data.user[0]) ;
      setUserInfo(response.data.user[0])
  }).catch((error)=>{
          console.log(error);
  })
  }, [])

  

  
  return (
    <div className='feedBack_main_div'>
      <div className='feedBack_center_div'>
        <FeedBackComponet userinfo={userinfo}></FeedBackComponet>
      </div>
    </div>
  );
};

export default FeedBack;
