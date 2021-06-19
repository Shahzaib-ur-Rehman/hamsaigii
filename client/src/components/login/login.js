import axios from 'axios';
import React, { useState } from 'react'
import {Redirect, useHistory,NavLink} from 'react-router-dom';
import '../../styles/Form.css';
const Login = () => {
    const history=useHistory();
    const [inputValues,setInputValues]= useState({
        email:'',
        password:''
    })
    


    const loginUser =async (e) => {
        e.preventDefault();
        const {email,password}=inputValues;
        console.log(email,password);
        if (!email||!password) {
            window.alert('Plz Fill all Fields')
        }else{
           try {
            const response =await axios.post('/api/users/login',{
                email,password
            })
            if(response.data.success) {
                history.push('/dashboard');
            }
           } catch (error) {
               if(error){
                   window.alert('Invalid Credentials');
               }
           }
            
        }

        

    }


    const handleInputs = (e) => {
        const {name,value} =e.target;
        setInputValues({
            ...inputValues,
            [name]:value
        })
    }
    return (
        <>
            <div className='container-fluid registration_div'>
               <div className='main_form_div'>
                    <div className='row'>
                        <div className='col-md-10 col-10 mx-auto'>
                        <h2 className='text-center mt-5 fw-bold text-uppercase'>log in</h2>
                            <form method='POST'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' value={inputValues.email} onChange={handleInputs}  className='form-control mb-2' name='email'></input>
                            <label htmlFor='password'>Password</label>
                            <input type='password' value={inputValues.password} onChange={handleInputs}  className='form-control mb-2' name='password'></input>
                            <div className='d-flex justify-content-center'>
                            <button type='submit' className='btn login_btn btn-grad mt-3 mb-5' onClick={loginUser}>LOGIN</button>
                            </div>
                            </form>
                            <div className='mb-4 d-flex justify-content-center'>
                            <span>Don't have and account ? </span>
                            <NavLink to='/register' className=' mx-2 signup_text'>Sign up</NavLink>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}

export default Login
