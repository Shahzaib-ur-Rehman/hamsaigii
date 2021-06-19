import axios from "axios";
import React, { useEffect, useState } from "react";
import "./allcontract.css";
import NeighourPopupModel from "./NeighourPopupModel";
const NeighborContract = () => {
  const [neighborContracts, setNeighborContracts] = useState([]);
  const [rejectedPost, setRejectPost] = useState();
  const [openPopUp, setOpenPopUp] = useState(false);
  useEffect(() => {
    axios
      .get("/api/users/loggedIn")
      .then((response) => {
        if (response.data.auth) {
          axios
            .get("/api/posts/receivedPassedOnContracts")
            .then((response) => {
              setNeighborContracts(response.data.posts);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const requestApproved = async (currentElement) => {
    const id = currentElement._id;
    const userId = currentElement.userId;
    console.log(id, userId);
    let status = "Approved";
    const response = await axios.put("/api/posts/updatePost", {
      id,
      userId,
      status,
    });
    console.log(response);
    if (response.data.success) {
      window.alert("Request Approved");
    }
  };
  console.log(neighborContracts);
  return (
    <div>
      <div class='card neighbor_card_div'>
        {neighborContracts.length < 1 ? (
          <>
            <h5 className='text-center text-uppercase mt-3 mb-3'>
              No Record Found
            </h5>
          </>
        ) : (
          <div className='d-flex justify-content-around mt-3'>
            {neighborContracts.map((currentElement) => (
              <div className='card mb-3'>
                <div class='card-body ' key={currentElement._id}>
                  <h5 class='card-title d-flex flex-column'>
                    {currentElement.item_name}
                    <small>Return Date : {currentElement.return_date}</small>
                  </h5>
                  <small>{currentElement.neighbourId.fullname}</small>
                  <p class='card-text'>{currentElement.message}</p>
                  <a
                    href='#'
                    class='btn btn-outline-success'
                    onClick={(e) => {
                      e.preventDefault();
                      requestApproved(currentElement);
                    }}>
                    Approve
                  </a>
                  <a
                    href='#'
                    class='btn btn-outline-danger mx-3'
                    onClick={(e) => {
                      e.preventDefault();
                      setRejectPost(currentElement);
                      setOpenPopUp(true);
                    }}>
                    Reject
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <NeighourPopupModel
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
        rejectedPost={rejectedPost}></NeighourPopupModel>
    </div>
  );
};

export default NeighborContract;
