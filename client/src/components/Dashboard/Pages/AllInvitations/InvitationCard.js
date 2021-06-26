import React from 'react'
import { useState } from 'react'
import RejectionPopup from './RejectionPopup';

const InvitationCard = () => {
    const [openpopup,setOpenPopup]=useState(false);
    return (
        <>
             <div className='col-5'>
              <div className='card'>
              <div class='card-body'>
                <h5 class='card-title'>Merrage Ceremony</h5>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <p class='card-text d-flex justify-content-between'>
                  <p>Date : 24-06.2021</p>
                  <p>Time : 06.00PM</p>
                </p>
                <div className='d-flex justify-content-center'>
                <a  class='btn btn-outline-danger' onClick={()=>{
                    setOpenPopup(true);
                }}>
                  Reject invitation
                </a>
                <a  class='btn btn-outline-success mx-lg-2'>
                  Accept invitation
                </a>
                </div>
              </div>
              </div>
              </div>
              <RejectionPopup openpopup={openpopup} setOpenPopup={setOpenPopup}></RejectionPopup>
        </>
    )
}

export default InvitationCard
