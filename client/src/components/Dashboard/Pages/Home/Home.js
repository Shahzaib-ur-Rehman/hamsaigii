import React, { useState, useEffect } from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";
import "./Home.css";
import Popup from "./Popup";
import axios from "axios";

const Home = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [allNeighbors, setAllNeighbors] = useState([]);
  const [neighborData, setNeighborData] = useState();

  useEffect(() => {
    axios
      .get("/api/users/loggedIn")
      .then((response) => {
        console.log(response.data.user[0]._id);
        let id = response.data.user[0]._id;
        axios
          .get("/api/users/getAllNeibours", {
            params: {
              id: id,
            },
          })
          .then((response) => {
            console.log(response);
            let data = response.data.neibours;
            setAllNeighbors(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='home_div_neighbor'>
      <div className='allNeighborList'>
        <div className='row'>
          <div className='col-10 mt-4 mx-auto'>
            <h3 className='text-center text-uppercase mb-3'>
              All Society Members
            </h3>
            <table class='table  table-bordered border-primary'>
              <thead className='table-dark'>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Full Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Address</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {allNeighbors.length < 1 ? (
                  <>
                    <tr className='text-center text-uppercase mt-3 mb-3 bg-light text-dark fw-bold'>
                      <td colspan='5'>No Neigbhour Found</td>
                    </tr>
                  </>
                ) : (
                  <>
                    {allNeighbors.map((data, index) => (
                      <tr key={data._id}>
                        <th scope='row'>{index + 1}</th>
                        <td>{data.fullname}</td>
                        <td>{data.email}</td>
                        <td>{data.address}</td>
                        <td className='d-flex justify-content-center '>
                          <button
                            className='postDataBtn'
                            onClick={() => {
                              setNeighborData(data);
                              setOpenPopup(true);
                            }}>
                            <PostAddIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        neighborData={neighborData}></Popup>
    </div>
  );
};

export default Home;
