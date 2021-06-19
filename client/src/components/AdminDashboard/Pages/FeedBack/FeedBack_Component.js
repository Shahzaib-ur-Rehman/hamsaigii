import axios from "axios";
import React, { useEffect, useState } from "react";
import "./feedback.css";
import SendMessagePopupModel from "./SendMessagePopupModel";
const FeedBack_Component = (props) => {
  const [userFeedBack, setUserFeedback] = useState([]);
  const [openpopup, setopenpopup] = useState(false);
  const [replyBack, setReplyBack] = useState();
  useEffect(() => {
    axios
      .get("/api/user_feedback/getAllFeedback")
      .then((response) => {
        //   console.log(response.data);
        if (response.data.success) {
          setUserFeedback(response.data.feedbacks);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(userFeedBack);
  const sendReplyback = (feedback) => {
    setReplyBack(feedback);
  };
  return (
    <>
      {userFeedBack.length < 1 ? (
        <>
          <h5 className='text-center'>No Record Found</h5>
        </>
      ) : (
        <>
          {userFeedBack.map((feedback) => (
            <div class='col-sm-4' key={feedback._id}>
              <div class='card'>
                <div class='card-body'>
                  <small>{feedback.userId.fullname}</small>
                  <p class='card-text'>{feedback.message}</p>
                  <button
                    className='btn btn-outline-success'
                    onClick={() => {
                      setopenpopup(true);
                      sendReplyback(feedback);
                    }}>
                    Reply Back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <SendMessagePopupModel
        openpopup={openpopup}
        setopenpopup={setopenpopup}
        replyBack={replyBack}></SendMessagePopupModel>
    </>
  );
};

export default FeedBack_Component;
