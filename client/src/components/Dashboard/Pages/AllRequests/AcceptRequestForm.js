import axios from "axios";
import React, { useState } from "react";
import "./allrequest.css";
const AcceptRequestForm = (props) => {
  const [userMessage, setUserMessage] = useState();
  const setOpenPopup = props.setOpenPopup;

  const sendMessage = async (e) => {
    const id = props.id;
    const userId = props.userId;
    const message=userMessage;
    const response = await axios.put("/api/user_request/requestAccepted", {
      id, userId, message
    });
    console.log(response.data);
    if(response.data.success){
      window.alert('Message Sent Successfully');
      setOpenPopup(false);

    }
  };

  return (
    <>
      <div className='row acceptDialog_div'>
        <div className='col-11 mx-auto'>
          <form method='POST'>
            <div class='mb-3'>
              <label for='message' class='form-label'>
                Message
              </label>
              <input
                type='text'
                class='form-control'
                id='message'
                value={userMessage}
                name='message'
                onChange={(e) => {
                  setUserMessage(e.target.value);
                }}
                placeholder='Enter Your Message'
              />
            </div>
            <div className='d-flex justify-content-end'>
              <button
                className='btn btn-outline-danger mx-2'
                onClick={(e) => {
                  e.preventDefault();
                  setOpenPopup(false);
                }}>
                Cancel
              </button>
              <button
                className='btn btn-outline-success'
                onClick={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AcceptRequestForm;
