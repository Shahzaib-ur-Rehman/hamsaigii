import React, { useState,useEffect } from 'react'
import {useHistory,Redirect } from 'react-router-dom';
import AdminDashoard from './AdminDashboard/AdminDashoard';
import Dashboard from './Dashboard/Dashboard';
const axios = require('axios').default;

const Main = () => {
    const [role,setRole] =useState(0);

    const history =useHistory();
    useEffect(() => {
        axios.get('/api/users/loggedIn').then((response)=>{          
            if(response.data.auth==false) {
                history.push("/login")
            }else{
                const userRole=response.data.user[0].role;
                setRole(userRole)
            }
        }).catch((error)=>{
                console.log(error);
        })
    }, [])
   
    return (
        <div>
            {role===0 ?<AdminDashoard/>:<Dashboard/> }
        </div>
    )
}

export default Main
