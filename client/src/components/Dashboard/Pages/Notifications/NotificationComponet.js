import axios from "axios";
import React, { useEffect, useState } from "react";

const NotificationComponet = () => {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    axios
      .get("/api/users/getAllNotification")
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          setNotification(response.data.notifications);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {notification.length < 1 ? (
        <div className='row'>
          <div className='col-12'>
          <h5 className='text-center mt-3 bg-light w-100 mx-3'>No Notification Found</h5>
          </div>
        </div>
      ) : (
        <>
          {notification.map((currentElement) => (
            <div className='col-10 mx-auto'>
              <div
                className={
                  currentElement.color == "danger"
                    ? "card text-dark bg_danger mb-3"
                    : currentElement.color == "primary"
                    ? "card text-dark bg_primary mb-3"
                    : "card text-dark bg_success mb-3"
                }
                style={{ maxWidth: "52rem" }}
                key={currentElement._id}>
                <div className='card-body'>
                  <p className='card-text'>{currentElement.message}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default NotificationComponet;
