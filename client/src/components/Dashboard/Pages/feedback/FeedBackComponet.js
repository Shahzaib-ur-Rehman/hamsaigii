import axios from "axios";
import React, { useState } from "react";

const FeedBackComponet = (props) => {
  const { fullname, email, address } = props.userinfo;
  console.log(fullname, email, address);
  const [message, setMessage] = useState();
  const sendFeedBack = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/user_feedback/addFeedback", {
      message,
    });
    console.log(response);
    if (response.data.success) {
      window.alert("FeedBack Sent Successfully");
      setMessage("");
    }
  };
  return (
    <div className='row'>
      <div className='col-10 mx-auto'>
        <h3 className='text-center text-uppercase mt-3 mb-3'>
          Feedback ann Complain
        </h3>
        <form method='POST'>
          <div className='row d-flex justify-content-center'>
            <div className='col-4'>
              <div class='mb-4'>
                <label for='formGroupExampleInput' class='form-label'>
                  Full Name
                </label>
                <input
                  type='text'
                  class='form-control'
                  name='fullName'
                  id='name'
                  value={fullname}
                  disabled
                  placeholder='Name'
                />
              </div>
            </div>
            <div className='col-4'>
              <div class='mb-3'>
                <label for='formGroupExampleInput' class='form-label'>
                  Email
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='email'
                  name='email'
                  value={email}
                  disabled
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='col-3'>
              <div class='mb-3'>
                <label for='formGroupExampleInput' class='form-label'>
                  Address
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='address'
                  name='address'
                  value={address}
                  disabled
                  placeholder='Address'
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-11 mx-auto '>
              <textarea
                className='form-control'
                rows='5'
                cols='8'
                name='message'
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder='Enter Complain and FeedBack Here'></textarea>
            </div>
          </div>
          <div className='row mx-lg-1'>
            <div className='col-5 mx-lg-3 mt-3'>
              <button
                className='btn btn-outline-success'
                onClick={sendFeedBack}>
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedBackComponet;
