import React from 'react'
import Navbar from '../Navbar_main/Navbar'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className='container-fluid Home_div'>
                <div className='row navbar_div'>
                    <div className='col-md-10 col-12 mx-auto'>
                        <Navbar/>
                    </div>
                </div>
                <div className=''>
                <div className='row home_text_div '>
                    <div className='col-md-12 d-flex justify-content-center align-items-center'>
                        <div className='animation_text'>Well Come To Our Humsaigii Web App</div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Home
