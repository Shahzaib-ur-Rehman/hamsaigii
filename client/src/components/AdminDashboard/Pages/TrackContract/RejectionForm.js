import axios from "axios";
import React,{useState} from "react";
import './trackContract.css';
const RejectionForm = (props) => {
  const {setOpenPopup}=props;
  const [reason,setReason]=useState({
    reason:''
  });
  const status="Rejected";

  const id= props.rejectedPost._id;
  const userId=props.rejectedPost.userId;
  // console.log(`Id Rejected Post ${id}`);
  const rejectRequest = async (e) => {
    e.preventDefault();
    const response = await axios.put('/api/posts/updatePost',{
      id,userId,status,reason
    })
    console.log("Update Status"+response.data.success);
    if (response.data.success) {
      window.alert('Post Rejected ')
      setOpenPopup(false);
    }

  }
  return (
    <div className='rejectionForm_div'>
      <div className='row'>
        <div className='col-10'>
          <form method="POST">
            <div class='mb-3'>
              <label htmlFor='name' class='form-label'>
                Reason
              </label>
              <textarea
                type='text'
                cols='55'
                name="reason"
                value={reason.reason}
                onChange={(e)=>setReason(e.target.value)}
                class='form-control textarea_div'
                id='name'
                placeholder='Write reason why You reject this'
              />
            </div>
            <div className='btndiv'>
            <button className='btn btn-outline-danger ' onClick={(e)=>{
                e.preventDefault();
                props.setOpenPopup(false);
            }}>Cancel</button>
            <button className='btn btn-outline-success mx-2' onClick={rejectRequest}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RejectionForm;
