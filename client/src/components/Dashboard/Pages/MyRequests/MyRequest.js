import React from "react";
import "./myrequest.css";
import MyRequest_Component from "./MyRequest_Component";
const MyRequest = () => {
  return (
    <div className='myrequest_main_div'>
      <div className='myrequest_center_div'>
        <h3 className='text-center mt-3 text-uppercase mb-3'>My Request </h3>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <table class='table table-bordered'>
              <thead>
                <tr className='table-dark'>
                  <th scope='col'>#</th>
                  <th scope='col'>Item Name</th>
                  <th scope='col'>Return Date</th>
                  <th scope='col'>Message</th>
                  <th scope='col'>Delete</th>
                </tr>
              </thead>
                <MyRequest_Component></MyRequest_Component>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequest;
