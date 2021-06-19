import axios from "axios";
import React,{useState} from "react";
import "./manageSociety.css";
const AddSociety = (props) => {
    const [society,setSociety]=useState({
        name:"",
        location:"",
        description:""
    });
    const {setOpenPopup}=props;
    const addNewSociety = async (e) => {
        e.preventDefault();
        const {name,location,description}= society;
        if(!name || !location || !description){
          window.alert('plz fill all fields');
        }
        const response = await axios.post('/api/admin/addSociety',{
          name, location, description
        })
        console.log(response);
        if(response.status===200){
          window.alert('Society Added Successfully');
            setOpenPopup(false);
            window.location.reload();
        }else{
            window.alert('User issue')
        }

    }

    const handleInputs = (e) => {
        const {name,value}=e.target;
        setSociety({
            ...society,
            [name]:value
        })
    }
  return (
    <>
      <div className='addSociety_div'>
        <h3 className='text-center mt-1 mb-2'>Add Society</h3>
        <form className='' method="POST">
          <div class='mb-3'>
            <label for='exampleFormControlInput1' class='form-label'>
              Society Name
            </label>
            <input
              type='text'
              class='form-control'
              value={society.name}
              onChange={handleInputs}
              name='name'
              id='exampleFormControlInput1'
              placeholder='Enter Society Name'
            />
          </div>
          <div class='mb-3'>
            <label for='exampleFormControlInput1' class='form-label'>
              Location
            </label>
            <input
              type='text'
              class='form-control'
              value={society.location}
              onChange={handleInputs}
              name='location'
              id='exampleFormControlInput1'
              placeholder='Enter Location'
            />
          </div>
          <div class='mb-3'>
            <label for='exampleFormControlInput1' class='form-label'>
              Discription
            </label>
            <input
              type='text'
              value={society.discription}
              onChange={handleInputs}
              name='description'
              class='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter Discription'
            />
          </div><div class='mb-3'>
            <button className='form-control btn btn-outline-success' onClick={addNewSociety}> Add Society</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSociety;
