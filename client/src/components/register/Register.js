import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import "../../styles/Form.css";
import axios from "axios";
const Register = () => {
  const history = useHistory();
  let [societies, setSocieties] = useState([]);
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    phone: "",
    society: "",
    password: "",
    address: "",
  });
  useEffect(() => {
    axios
      .get("/api/admin/getSocieties")
      .then((response) => {
        setSocieties(response.data.societies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const registerNeighbour = async (e) => {
    e.preventDefault();
    const { fullname, email, phone, society, password, address } = inputData;

    if (!fullname || !email || !phone || !society || !password || !address) {
      window.alert("Plz Fill all Fields");
    } else {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone,
          society,
          password,
          address,
        }),
      });
      console.log(response.status);
      if (response.status==400) {
        window.alert('User Already Exist ')
      }else{
        history.push('/dashboard');
      }
    }
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  let found =societies.find((value)=>{
    return value == "Select Option";
  })
  if(found=="Select Option"){
     societies=societies;
  }else{
    societies.unshift("Select Option")
  }
  return (
    <>
      <div className='container-fluid registration_div'>
        <div className='main_form_div'>
          <div className='row'>
            <div className='col-md-10 col-10 mx-auto'>
              <h2 className='text-center mt-1 fw-bold text-uppercase'>
                Register
              </h2>
              <form method='POST'>
                <label htmlFor='fullname'>Full Name</label>
                <input
                  type='text'
                  value={inputData.fullname}
                  onChange={handleInputs}
                  className='form-control mb-2'
                  name='fullname'></input>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  value={inputData.email}
                  onChange={handleInputs}
                  className='form-control mb-2'
                  name='email'></input>
                <label htmlFor='phone'>Contact No</label>
                <input
                  type='number'
                  value={inputData.phone}
                  onChange={handleInputs}
                  className='form-control mb-2'
                  name='phone'></input>
                <label htmlFor='inputState' className='form-label'>
                  Select Society
                </label>

                <select
                  id='inputState'
                  name='society'
                  onChange={handleInputs}
                  className='form-select mb-2'>
                  
                  {societies.map((data) => (
                    <option key={data} value={data}>
                      {data}
                    </option>

                  ))}
                </select>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  value={inputData.password}
                  onChange={handleInputs}
                  className='form-control mb-2'
                  name='password'></input>
                <label htmlFor='formGroupExampleInput' className='form-label'>
                  Address
                </label>
                <textarea
                  type='text'
                  onChange={handleInputs}
                  value={inputData.address}
                  className='form-control '
                  name='address'></textarea>
                <div className='d-flex mt-1 justify-content-center register_btn'>
                  <button
                    type='submit'
                    className='btn btn-grad mt-2'
                    onClick={registerNeighbour}>
                    Register
                  </button>
                  <button type='submit' className='btn btn-danger mx-2 mt-2'>
                    Reset
                  </button>
                </div>
                <div className='mb-2 d-flex justify-content-center'>
                <span>Already have an account ? </span>
                <NavLink to='/login' className=' mx-2 signup_text'>
                  Log in
                </NavLink>
              </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
