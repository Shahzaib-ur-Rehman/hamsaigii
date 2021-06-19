import React, {useState} from "react";
import "./profile.css";
import axios from "axios";
const ChangePasswordForm = (props) => {
  const [old_password,setOldPassword]=useState('');
  const [new_password,setNewPassword]=useState('');
  const setOpenPopup = props.setOpenPopup;
  const ChangePassword = async () => {

    let loggedInResponse = await axios.get("/api/users/loggedIn");
    if(loggedInResponse.data.auth){
      const response=await axios.put('/api/users/changePassword',{
        old_password,new_password
      })
      console.log(response);
    }
      
  };
  return (
    <div className='changepassword_main_div'>
      <form method="POST">
        <div className='row'>
          <div className='col-12'>
            <div class='mb-3'>
              <input
                type='text'
                class='form-control'
                id='oldpassword'
                onChange={(e)=>{
                  setOldPassword(e.target.value)
                }}
                value={old_password}
                name='old_password'
                placeholder='old password'
              />
            </div>
            <div class='mb-3'>
              <input
                type='text'
                class='form-control'
                id='newpassword'
                onChange={(e)=>{
                  setNewPassword(e.target.value);
                }}
                value={new_password}
                name='new_password'
                placeholder='New password'
              />
            </div>
            <div class='mb-3 d-flex justify-content-center'>
              <button
                className='btn btn-outline-success'
                onClick={(e) => {
                  e.preventDefault();
                  setOpenPopup(false);
                  ChangePassword();
                }}>
                Update Password
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
