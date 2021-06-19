import React, { useState,useEffect } from "react";
import  './ContractPopup.css';
import axios from 'axios';
const ContractPopup = (props) => {
  const {_id,fullname,email} = props.neighborData;
    const [contractData,setContractData]=useState({
        itemname:'',
        email:email,
        returndate:'',
        message:''
    });
    const [userId,setUserId]=useState();
    let neighbourId=_id;
    let neibName=fullname;
    useEffect(() => {
      axios.get('/api/users/loggedIn').then((response)=>{          
        setUserId(response.data.user[0]._id);
    }).catch((error)=>{
            console.log(error);
    })
    }, [])


    const sendContract = async (e) => {
        e.preventDefault();
        const {item_name,email,message,return_date}=contractData;
        if (!item_name||!email||!return_date||!message) {
            window.alert('Plz Fill All Fields');
        }else{
            const response = await axios.post('/api/posts/signContract',{
              userId,neighbourId,neibName,item_name,message,return_date
            })
            console.log(response);
            if (response.data.success) {
              window.alert(response.data.msg);
            }
            props.setOpenPopup(false);
        }

    }

    const handleInput = (e) => {
        const {name,value}=e.target;
        setContractData({
            ...contractData,
            [name]:value
        })
    }

  return (
    <div className='main_contractPopup_div'>
      <div className='center_contractPopup_div'>
        <h3 className='text-center mt-3 text-uppercase'>Sign Contract</h3>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div class='mb-3'>
              <label for='nameId' class='form-label'>
                Name of thing
              </label>
              <input
                type='text'
                class='form-control'
                id='item_name'
                onChange={handleInput}
                name='item_name'
                value={contractData.needName}
                placeholder='Enter what you need'
              />
            </div>
            <div class='mb-3'>
              <label for='formGroupExampleInput' class='form-label'>
                Person Email
              </label>
              <input
                type='text'
                class='form-control'
                name='email'
                id='formGroupExampleInput'
                value={contractData.email}
                onChange={handleInput}
                placeholder='Enter Email'
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
                placeholder='Enter Email'
              />
            </div>
            <div class='mb-3'>
              <label for='formGroupExampleInput' class='form-label'>
                Message
              </label>
              <textarea className='form-control' name='message' value={contractData.message} onChange={handleInput} 
              placeholder='Why You Need'></textarea>
            </div>
            <div class='mb-3'>
                <button className='btn  btn-outline-success' onClick={sendContract}>Send Reguest</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractPopup;
