import axios from 'axios';
import React, { useState } from 'react'

const NeighourRejectReq = (props) => {
    const [reason,setReason]=useState({
        reason:''
    });
    const setOpenPopUp= props.setOpenPopUp;
    console.log(props.rejectedPost);
    let id=props.rejectedPost._id;
    let userId=props.rejectedPost.userId;
    let status="Rejected";

    const sendRejectedPost= async(e) => {
      e.preventDefault();
      const response= await axios.put('/api/posts/updatePost',{
        id,userId, status,reason
      })
      console.log(response.data.success);
      if(response.data.success){
        window.alert('Post Rejected');
        setOpenPopUp(false);
      }
    }
    return (
        <div className='neighbourForm_div'>
        <div className='row'>
          <div className='col-10'>
            <form>
              <div class='mb-3'>
                <label htmlFor='name' class='form-label'>
                  Reason
                </label>
                <textarea
                  type='text'
                  cols='55'
                  name='reason'
                  value={reason.reason}
                  onChange={(e)=>{setReason(e.target.value)}}
                  class='form-control textarea_div'
                  id='name'
                  placeholder='Write reason why You reject this'
                />
              </div>
              <div className='btndiv'>
                <button className='btn btn-outline-danger ' onClick={(e)=>{
                    e.preventDefault();
                    setOpenPopUp(false);
                }}>Cancel</button>
                <button className='btn btn-outline-success mx-2' onClick={sendRejectedPost}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default NeighourRejectReq
