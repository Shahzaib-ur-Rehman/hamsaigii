import React from "react";
import "./allinvitations.css";
import InvitationCard from "./InvitationCard";
const Allinvitations = () => {
  return (
    <div className='all_invitations_main_div'>
      <div className='all_invitations_center_div'>
        <h3 className='text-uppercase text-center mt-3 mb-3'>
          All Invitations
        </h3>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-2'>
                <InvitationCard></InvitationCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allinvitations;
