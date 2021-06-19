import React, { useState } from "react";
import ReactDOM ,{ NavLink } from "react-router-dom";
import "./allcontract.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MyContracts from "./MyContracts";
import NeighborContract from "./NeighborContract";

const AllContracts = () => {
  const [bgColorId1,setBgColorId1]=useState('');
  const [bgColorId2,setBgColorId2]=useState('');
  const changeColor = (id) =>{
    if(id==1){
      setBgColorId1('#56ccc6');
      setBgColorId2('white');
    }else{
      setBgColorId1('white');
      setBgColorId2('#56ccc6');
    }
  }
  return (
    <div className='allContract_main_div'>
      <div className='allContract_center_div'>
        <div className='row'>
          <div className='col-12 '>
            <h3 className='text-uppercase text-center mt-3'>
              All Contract Records
            </h3>
            <div className='row mt-3'>
              <div className='col-10 mx-auto'>
                <Tabs className='tabs_div '   >
                  <TabList className='tabList_div'>
                    <Tab className='tabList_tab1_div' onClick={()=>{
                      changeColor(1);
                    }} style={{backgroundColor:bgColorId1}}>Neighbor Contracts</Tab>
                    <Tab className='tabList_tab2_div ' onClick={()=>{
                      changeColor(2);
                    }} style={{backgroundColor:bgColorId2}}>My Contracts</Tab>
                  </TabList>

                  <TabPanel className='tab_content_div'>
                    <div className='row'>
                      <NeighborContract/>
                    </div>
                  </TabPanel>
                  <TabPanel className='tab_content_div'>
                  <div className='row'>
                      <div className='col-12'>
                        <MyContracts/>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContracts;
