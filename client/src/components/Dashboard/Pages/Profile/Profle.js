import React, { useState, useEffect } from "react";
import ChangePasswordPopupModal from "./ChangePasswordPopupModal";
import "./profile.css";
import axios from "axios";
const Profle = () => {
  const [openpopup, setOpenPopup] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios
      .get("/api/users/loggedIn")
      .then((response) => {
        //  console.log(response.data.user[0]);
        setUserData(response.data.user[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(userData);
  return (
    <div className='profile_main_div'>
      <div className='profile_center_div'>
        <h3 className='text-center text-uppercase mt-5 fw-bold profileColor'>Profile</h3>
        <div className='row mt-4'>
          <div className='col-10 mx-auto'>
            <div class='col-sm-10 mx-auto'>
              <div class='card'>
                <div class='card-body'>
                  <div className='d-flex justify-content-between'>
                    <p>Name : </p>
                    <p>{userData.fullname}</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p>Email : </p>
                    <p>{userData.email}</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p>Phone No : </p>
                    <p>{userData.phone}</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p>Society Name : </p>
                    <p>{userData.society}</p>
                  </div>

                  <div className='d-flex justify-content-between'>
                    <p>Address : </p>
                    <p>{userData.address}</p>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button
                      className='btn btn-outline-success profileColor'
                      onClick={() => {
                        setOpenPopup(true);
                      }}>
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChangePasswordPopupModal
        openpopup={openpopup}
        setOpenPopup={setOpenPopup} setOpenPopup ={setOpenPopup}></ChangePasswordPopupModal>
    </div>
  );
};

export default Profle;
