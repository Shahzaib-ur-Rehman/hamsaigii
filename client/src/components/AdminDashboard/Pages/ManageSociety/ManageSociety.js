import React, { useState } from "react";
import "./manageSociety.css";
import PopupModel from "./PopupModel";
import AllSocieties from "./AllSocieties";
const ManageSociety = () => {
  const [openPopup,setOpenPopup]=useState(false);
  return (
    <div className='manageSociety_main_div'>
      <div className='manageSociety_center_div'>
        <div className='row'>
          <h3 className='text-center mt-3 mb-2 text-uppercase'>
            Manage Societies
          </h3>
          <div className='col-10  mx-auto'>
              <div className='row'>
                <div className='col-3'>
                  <div class='mb-3 '>
                    <button className='btn btn-outline-success add_society_btn' onClick={()=>setOpenPopup(true)}>
                      Add Society
                    </button>
                  </div>
                </div>
              </div>
            <div className='row'>
              <AllSocieties/>
              
            </div>
          </div>
        </div>
      </div>
      <PopupModel openPopup={openPopup} setOpenPopup={setOpenPopup}/>
    </div>
  );
};

export default ManageSociety;
