import axios from "axios";
import React,{useState} from "react";
import "./feedback.css";
const SendMessageForm = (props) => {
    const [reply,setReply]=useState();
    const setopenpopup=props.setopenpopup;
    const id=props.replyBack._id;
    const userId=props.replyBack.userId._id;
    console.log(id,userId);
    const sendMessageToUser = async () => {
      console.log(id,userId,reply);
      const sendMessageResponse= await axios.put('/api/user_feedback/replyFeedback',{
        id,userId,reply
    })
    console.log(sendMessageResponse);
    if(sendMessageResponse.data.success){
        window.alert('Responed Send to particular neibghour');
        setopenpopup(false);
    }
    }
  return (
    <>
      <form className='sendMessageForm_div' method="POST">
        <div class='mb-3'>
          <label htmlFor='message' className='form-label'>
           Reply Message
          </label>
          <textarea
            type='text'
            className='form-control'
            id='reply'
            name='reply'
            onChange={(e)=>{setReply(e.target.value)}}
            value={reply}
            aria-describedby='message'
          ></textarea>
        </div>
        <div className='mt-2 mb-0 d-flex justify-content-end'>
          <button className='btn btn-outline-success' onClick={
              (e)=>{
                  e.preventDefault();
                  sendMessageToUser();
              }
          }>Send Message</button>
          </div>
      </form>
    </>
  );
};

export default SendMessageForm;
