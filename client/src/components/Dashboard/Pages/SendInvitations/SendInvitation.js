import React,{useState} from "react";
import "./sendinvitation.css";
import Multiselect from 'multiselect-react-dropdown';
const Data=[
    {Country:"Emaan",id:1},
    {Country:"Irsa",id:2},
    {Country:"jannat",id:3},
    {Country:"Ayehsa",id:4},
    {Country:"Arooj",id:5},
    {Country:"Malaika",id:6}
]
const SendInvitation = () => {
    const [options,setOptions]=useState(Data);
    const SelectedNeighbours = (data) =>{
        console.log(data);
    }
  return (
    <div className='send_invitation_main_div'>
      <div className='send_invitation_center_div'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <h3 className='text-center text-uppercase mt-2'>
              Invite Neighbours
            </h3>
            <form>
              <div className='mb-2'>
                <label htmlFor='title' class='form-label'>
                  Title
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='title'
                  placeholder='Enter Invitation Title'
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='message' class='form-label'>
                  Message
                </label>
                <textarea
                  type='text'
                  class='form-control'
                  id='message'
                  placeholder='Enter Invitation Message'
                />
              </div>

              <div className='mb-2 multi_select_box'>
              <label htmlFor='message' class='form-label'>
                  Neighbours List
                </label>
                <Multiselect options={options} displayValue="Country" onSelect={SelectedNeighbours}>
                </Multiselect>
              </div>

              <div className='mb-2'>
                <label htmlFor='message' class='form-label'>
                  Date
                </label>
                <input
                  type='date'
                  class='form-control'
                  id='date'
                />
              </div>

              <div className='mb-2'>
                <label htmlFor='message' class='form-label'>
                  Time
                </label>
                <input
                  type='time'
                  class='form-control'
                  id='time'
                />
              </div>
              <div className='mb-3 mt-3 d-flex justify-content-center'>
                <button className='btn btn-outline-success'>Send Invitation</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendInvitation;
