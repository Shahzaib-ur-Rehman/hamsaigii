import React,{useState,useEffect} from "react";
import "./feedback.css";
import FeedBack_Component from "./FeedBack_Component";
import axios from 'axios';
const FeedBack = () => {
  
  return (
    <div className='feedBack_main_div'>
      <div className='feedBack_center_div'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <h3 className='text-center mt-3 mb-2 text-uppercase'>
              Feedback & Complain
            </h3>
            <div class='row mt-3 d-flex gy-3'>
            <FeedBack_Component ></FeedBack_Component>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
