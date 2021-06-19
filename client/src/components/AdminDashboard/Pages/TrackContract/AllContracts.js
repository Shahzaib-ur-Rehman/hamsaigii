import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PopupModel from "./PopupModel";
import "./trackContract.css";
import axios from "axios";
const AllContracts = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [allPost, setAllPost] = useState([]);
  const [rejectedPost, setrejectedPost] = useState();
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/users/loggedIn")
      .then((response) => {
        console.log(response.data.auth);
        if (response.data.auth) {
          axios
            .get("/api/posts/getAllContracts")
            .then((response) => {
              const Posts = response.data.posts;
              console.log(Posts);
              setAllPost(Posts);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          history.push("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(allPost);
  const { item_name, neighbourId, message, return_date, userId } = allPost;

  const passsedOnPost = async (currentElement) => {
    let status = "Passed On";
    // const {id ,userId}=currentElement;
    const id = currentElement._id;
    const userId = currentElement.userId;
    console.log(id, userId);
    const response = await axios.put("/api/posts/updatePost", {
      id,
      userId,
      status,
    });
    console.log(response);
    window.alert("Request Sent To Neighbour");
  };
  return (
    <>
      {allPost.length < 1 ? (
        <>
          <h5 className='text-center mt-2'>No Record Found</h5>
        </>
      ) : (
        <>
          {allPost.map((currentElement) => (
            <div className='cards_div' key={currentElement._id}>
              <div class='card'>
                <div class='card-body'>
                  <h5 class='card-title d-flex justify-content-between'>
                    {currentElement.item_name}
                    <small>Return Date : 21-06-2021 </small>
                  </h5>
                  <small>{currentElement.neighbourId.fullname}</small>
                  <p class='card-text'>{currentElement.message}</p>
                  <button
                    class='btn btn-outline-success'
                    onClick={() => {
                      passsedOnPost(currentElement);
                    }}>
                    Approve
                  </button>
                  <button
                    onClick={(e) => {
                      setOpenPopup(true);
                      setrejectedPost(currentElement);
                    }}
                    class='btn btn-outline-danger mx-3'>
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <PopupModel
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        rejectedPost={rejectedPost}
      />
    </>
  );
};

export default AllContracts;
