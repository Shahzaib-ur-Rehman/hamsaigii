import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
const MyRequest_Component = () => {
  const [myRequest, setMyRequest] = useState([]);
  useEffect(() => {
    axios
      .get("/api/user_request/myRequest")
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setMyRequest(response.data.requests);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteRecode = (id) => {
    console.log(id);
    axios
      .delete(`/api/user_request/deleteRequest/${id}`)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          window.alert("Request Deleted");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <tbody>
      {myRequest.length < 1 ? (
        <>
          <tr className='text-center text-uppercase mt-3 mb-3 bg-light text-dark fw-bold'>
            <td colspan='5'>No Request Found</td>
          </tr>
        </>
      ) : (
        <>
          {myRequest.map((request) => (
            <tr key={request._id}>
              <th scope='row'>1</th>
              <td>{request.item_name}</td>
              <td>{request.return_date}</td>
              <td>{request.quote}</td>
              <td>
                <button
                  className='btndelete'
                  onClick={() => {
                    deleteRecode(request._id);
                  }}>
                  <DeleteIcon></DeleteIcon>
                </button>
              </td>
            </tr>
          ))}
        </>
      )}
    </tbody>
  );
};

export default MyRequest_Component;
