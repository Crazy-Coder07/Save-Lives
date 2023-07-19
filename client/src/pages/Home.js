import React, { useState, useEffect } from 'react'
import LayoutHome from '../components/shared/Layout/LayoutHome'
import img1 from "../images/bld5.webp"
import API from "../services/API"

const Home = () => {
  const [data1, setData1] = useState([]);
  //find donar records
  const getDonars = async () => {
    try {
      const { data } = await API.get("/admin/donar-list-withoutadmin");
      if (data?.success) {
        setData1(data?.donarData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  const [data2, setData2] = useState([]);
  //find donar records
  const getHospitals = async () => {
    try {
      const { data } = await API.get("/admin/hospital-list-withoutadmin");
      if (data?.success) {
        setData2(data?.hospitalData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHospitals();
  }, []);

  const [data3, setData3] = useState([]);
  //find donar records
  const getorgs = async () => {
    try {
      const { data } = await API.get("/admin/org-list-withoutadmin");
      if (data?.success) {
        setData3(data?.orgData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getorgs();
  }, []);

  return (
    <LayoutHome>
      <div>
        <img className="d-block w-100 himg" src={img1} alt="not found images" />
        <div className='d-flex justify-content-around'>
          <div className='datadisplay1'>{data1.length} User register</div>
          <div className='datadisplay2'> {data2.length} Hospital register</div>
          <div className='datadisplay3'>{data3.length} Orgs register</div>
        </div>
      </div>
    </LayoutHome>
  )
}

export default Home