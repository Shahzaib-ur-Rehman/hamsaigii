import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import "./signContract.css";
import axios from "axios";
const SignContract = () => {
  const history = useHistory();
  const [contractData, setContractData] = useState({
    item_name: "",
    return_date: "",
    quote: "",
  });

  const sendContract = async (e) => {
    e.preventDefault();
    const { item_name, quote, return_date } = contractData;
    if (!item_name || !return_date || !quote) {
      window.alert("Plz Fill All Fields");
    } else {

      const response = await axios.post("/api/user_request/addRequest", {
        item_name,
        quote,
        return_date,
      });
      // console.log(response.data.success);
      if (response.data.success) {
        setContractData({
          item_name: "",
          return_date: "",
          quote: "",
        })
        window.alert("Your Request is Sent Successfully");
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContractData({
      ...contractData,
      [name]: value,
    });
  };

  return (
    <div className='main_signContract_div'>
      <div className='center_mainContract_div'>
        <h3 className='text-center mt-3 text-uppercase'>Add Request</h3>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div class='mb-3'>
              <label for='formGroupExampleInput' class='form-label'>
                Name of thing
              </label>
              <input
                type='text'
                class='form-control'
                id='item_name'
                onChange={handleInput}
                name='item_name'
                value={contractData.item_name}
                placeholder='Enter what you need'
              />
            </div>
            <div class='mb-3'>
              <label for='formGroupExampleInput' class='form-label'>
                Return Date
              </label>
              <input
                type='date'
                class='form-control'
                name='return_date'
                id='return_date'
                onChange={handleInput}
                value={contractData.return_date}
              />
            </div>
            <div class='mb-3'>
              <label for='formGroupExampleInput' class='form-label'>
                Message
              </label>
              <textarea
                className='form-control'
                name='quote'
                value={contractData.quote}
                onChange={handleInput}
                placeholder='Why You Need'></textarea>
            </div>
            <div class='mb-3'>
              <button
                className='btn  btn-outline-success'
                onClick={sendContract}>
                Send Reguest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignContract;
