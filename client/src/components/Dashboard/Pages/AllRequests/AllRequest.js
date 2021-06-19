import React from "react";
import "./allrequest.css";
import RequestCard from "./RequestCard";
const AllRequest = () => {
  return (
    <div className='allrequest_main_div'>
      <div className='allrequest_center_div'>
        <h3 className='text-uppercase text-center mt-3 mb-3'>All Request</h3>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-2'>
                <RequestCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRequest;
