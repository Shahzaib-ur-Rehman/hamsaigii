import React, { useState, useEffect } from "react";
import "./manageSociety.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { NavLink } from "react-router-dom";
import UpdateSociety from "./UpdateSociety";
import UpdatePopupModel from "./UpdatePopupModel";
import axios from "axios";

const AllSocieties = () => {
  const [updatepopup, setupdatepopup] = useState(false);
  const [societies, setSocieties] = useState([]);
  const [rowData,setRowData]=useState({});
  let {_id,name,location,description}=rowData;
  console.log(name,location,description);
  useEffect(() => {
    axios
      .get("/api/admin/getAllSocieties")
      .then((response) => {
        //  console.log(response.data.societies);
        const societess = response.data.societies;
        setSocieties(societess);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const getId = (value) =>{
    setRowData(value);
  }
  const getData = async(data) => {

    const id= data._id;
    const response= await axios.delete('/api/admin/removedSociety',{id})
    if (response.data.success) {
      console.log(response);
    }
  }
  return (
    <>
      <div className='col-11  mx-auto'>
        <table class='table  table_div table-bordered'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Society Name</th>
              <th scope='col'>Location</th>
              <th scope='col'>Description</th>
              <th scope='col'>Eidt/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {societies.map((value, index) => (
              <tr key={value._id}>
                <th scope='row'>{index + 1}</th>
                <td>{value.name}</td>
                <td>{value.location}</td>
                <td>{value.description}</td>
                <td className=' '>
                  <button
                    className='btn_edit'
                    onClick={() =>{
                      setupdatepopup(true);
                      getId(value);
                    }
                     }>
                    <EditIcon className='btn_edit' />
                  </button>
                  {/* <button  className='btn_edit' onClick={()=>getData(value)}>
                    <DeleteIcon className='edit_btn' />
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <UpdateSociety/> */}
      <UpdatePopupModel
        updatepopup={updatepopup}
        setupdatepopup={setupdatepopup} _id={_id} name={name} location={location} description={description}></UpdatePopupModel>
    </>
  );
};

export default AllSocieties;
