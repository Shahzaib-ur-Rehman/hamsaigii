import axios from "axios";
import React, { useEffect, useState } from "react";
import ResponseModalPopup from "./ResponseModalPopup";

const RequestCard = () => {
  const [allRequests, setAllRequests] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [id, setId] = useState();
  const [userId, setUserId] = useState();
  useEffect(() => {
    axios
      .get("/api/users/loggedIn")
      .then((response) => {
        axios
          .get("/api/user_request/getAllRequest")
          .then((response) => {
            setAllRequests(response.data.requests);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(allRequests);
  const sendRequest = (currentElement) => {
    setId(currentElement._id);
    setUserId(currentElement.userId);
  };
  console.log(id, userId);
  return (
    <>
      {allRequests.length < 1 ? (
        <>
          <h5 className='text-center text-uppercase mb-3 mt-3 bg-light h-100'>
            No Request Found
          </h5>
        </>
      ) : (
        <>
          {allRequests.map((currentElement) => (
            <div class='col-sm-4'>
              <div class='card requestcard_div' key={currentElement._id}>
                <div class='card-body'>
                  <h5 class='card-title'>
                    <p>{currentElement.item_name}</p>
                    <small>Return Date : {currentElement.return_date}</small>
                  </h5>
                  <p class='card-text'>{currentElement.quote}</p>
                  <div className='d-flex justify-content-end'>
                    <button
                      className='btn btn-outline-success'
                      onClick={() => {
                        setOpenPopup(true);
                        sendRequest(currentElement);
                      }}>
                      Yes I Have
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <ResponseModalPopup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        id={id}
        userId={userId}></ResponseModalPopup>
    </>
  );
};

export default RequestCard;
