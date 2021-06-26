import React from "react";
import "./allinvitations.css";
const RejectionForm = () => {
  return (
    <>
      <div className='rejectionform_div'>
        <div className='row'>
          <div className='col-12 mx-auto'>
            <form>
              <div className='mb-2'>
                <label htmlFor='title' class='form-label'>
                  Reason
                </label>
                <textarea
                  type='text'
                  class='form-control'
                  id='reason'
                  placeholder='Enter Rejection Reason'
                />
              </div>
              <div className='d-flex justify-content-end mt-1'>
                  <button className='btn btn-outline-success'>Send Messgae</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RejectionForm;
