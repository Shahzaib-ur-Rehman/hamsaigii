import React ,  {useEffect} from 'react'
import { useHistory } from 'react-router';
import AllContracts from './AllContracts';
import './trackContract.css';
import axios from 'axios';
const TrackContract = () => {
  const history =useHistory();
  useEffect(() => {
    axios.get('/api/users/loggedIn').then((response)=>{          
      if(!response.data.auth) {
        history.push('/login');
      }
  }).catch((error)=>{
          console.log(error);
  })
  }, [])
    return (
        <div className='tractContract_main_div'>
            <div className='trackcontract_center_div'>
            <div className='row'>
          <div className='col-12 mx-auto '>
            <h3 className='text-uppercase text-center mt-3'>All Contract Records</h3>
            <div class='row mt-3 mb-3'>
            <AllContracts/>
            </div>
          </div>
        </div>
            </div>
        </div>
    )
}

export default TrackContract
