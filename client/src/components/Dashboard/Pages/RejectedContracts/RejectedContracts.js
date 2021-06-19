import axios from "axios";
import React, { useEffect, useState } from "react";
import "./rejectedContracts.css";
const RejectedContracts = () => {
  const [rejectedContracts, setRejectedContracts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/posts/getRejectedContracts")
      .then((response) => {
        //  console.log(response);
        setRejectedContracts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(rejectedContracts);
  return (
    <div className='rejectedContracts_main_div'>
      <div className='rejectedContrats_center_div'>
        <div className='row'>
          <h3 className='text-center mt-3 mb-3 text-uppercase'>
            All Rejected Contracts
          </h3>
          <div className='col-11 mx-auto'>
            <table class='table table-bordered '>
              <thead className='table-dark'>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Item Name</th>
                  <th scope='col'>Neighbor Name</th>
                  <th scope='col'>Rejected By</th>
                  <th scope='col'>Reason</th>
                </tr>
              </thead>
              <tbody>
                {rejectedContracts.length < 1 ? (
                  <>
                    <tr className='text-center text-uppercase mt-3 mb-3 bg-light text-dark fw-bold'>
                      <td colspan='5'>No Rejected Contracts</td>
                    </tr>
                  </>
                ) : (
                  <>
                    {rejectedContracts.map((currentElement, index) => (
                      <tr key={currentElement._id}>
                        <th scope='row'>{index + 1}</th>
                        <td>{currentElement.item_name}</td>
                        <td>lorem</td>
                        <td>
                          {currentElement.flag == 0 ? "Admin" : "Neighbor"}
                        </td>
                        <td>{currentElement.reason}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectedContracts;
