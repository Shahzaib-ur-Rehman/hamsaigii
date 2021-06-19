import axios from "axios";
import React,{useState} from "react";

const UpdateSociety = (props) => {
    let {name,location,description,setupdatepopup}=props;
    console.log(props._id);
    const [Name ,setName]=useState(props.name);
    const [Location,setLocation]=useState(props.location);
    const [Description,setDiscription]=useState(props.description);;

    const updateData = async (e) => {
        e.preventDefault();
        const id=props._id;
        const name=Name;
        const location=Location;
        const description=Description;
        console.log(location);
        const response= await axios.put('/api/admin/updateSociety',{
            id,name,location,description
        })
        console.log(response);
        if (response.data.success) {
            console.log(response);
            window.alert('Society Updated Successfully');
            setupdatepopup(false);
            window.location.reload();
        }else{
            window.alert('issue ')
        }

    }
    // const [rowData ,setRowData]=useState(
    //     name=name,
    //     location=location,
    //     description=description
    // );

    // const handleInputs = (e) => {
    //     const {name,value}=e.target;
    //     setRowData({
    //         ...Name,
    //         [name]:value
    //     })
    // }
  return (
    <div>
      <div className='addSociety_div'>
        <h3 className='text-center mt-1 mb-2'>Update Society</h3>
        <form className=''>
          <div class='mb-3'>
            <label htmlFor='exampleFormControlInput1' class='form-label'>
              Society Name
            </label>
            <input
              type='text'
              onChange={(e)=> setName(e.target.value)}
              name='name'
              value={Name}
              class='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter Society Name'
            />
          </div>
          <div class='mb-3'>
            <label htmlFor='exampleFormControlInput1' class='form-label'>
              Location
            </label>
            <input
              type='text'
              onChange={(e)=>setLocation(e.target.value)}
              name='location'
              value={Location}
              class='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter Location'
            />
          </div>
          <div class='mb-3'>
            <label htmlFor='exampleFormControlInput1' class='form-label'>
              Discription
            </label>
            <input
              type='text'
              onChange={(e)=>setDiscription(e.target.value)}
              name='description'
              value={Description}
              class='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter Discription'
            />
          </div>
          <div class='mb-3'>
            <button className='form-control' onClick={updateData}> Update Society</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSociety;
