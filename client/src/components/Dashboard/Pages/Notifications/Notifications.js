import React, { useState } from "react";
import NotificationComponet from "./NotificationComponet";
import "./notifications.css";

const RegisterNeighbor = () => {
  return (
    <div className='mein_registerNeighbor_div'>
      <div className='registerNeighbor_div'>
        <h3 className='mt-3 text-center text-uppercase mb-2'> Notifications</h3>
        <div className='row mt-3'>
          <NotificationComponet/>
        </div>
      </div>
    </div>
  );
};

export default RegisterNeighbor;
