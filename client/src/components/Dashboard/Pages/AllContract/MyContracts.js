import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./allcontract.css";
const MyContracts = () => {
  const [myContracts, setMyContracts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("/api/users/loggedIn")
      .then((response) => {
        if (response.data.auth) {
          axios.get("/api/posts/getSingleUserContracts").then((response) => {
            console.log(response);
            setMyContracts(response.data.posts);
          });
        } else {
          history.push("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(myContracts);
  return (
    <div>
      <table class='table table-bordered'>
        <thead className='table-dark'>
          <tr className=''>
            <th scope='col'>#</th>
            <th scope='col'>Item Name</th>
            <th scope='col'>Neighbor Name</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          {myContracts.length < 1 ? (
            <tr className='text-center text-uppercase mt-3 mb-3 bg-light text-dark fw-bold'>
              <td colspan='4'>No Contract Found</td>
            </tr>
          ) : (
            <>
              {myContracts.map((currentElement) => (
                <tr
                  key={currentElement._id}
                  className={
                    currentElement.status === "Rejected"
                      ? "bg_danger"
                      :(currentElement.status=="Passes On" ? 'bg_primary':'bg_success')
                  }>
                  <th scope='row'>1</th>
                  <td>{currentElement.item_name}</td>
                  <td>{currentElement.neighbourId.fullname}</td>
                  <td>{currentElement.status}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyContracts;
