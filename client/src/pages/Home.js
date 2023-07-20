import React, { useState, useEffect } from 'react'
import LayoutHome from '../components/shared/Layout/LayoutHome'
import img1 from "../images/bld5.webp"
import API from "../services/API"
import img2 from "../images/bld7.webp"

const Home = () => {


  // To Find the total No of Users
  const [data1, setData1] = useState([]);
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


  //  To find the Total No. of Hospitals
  const [data2, setData2] = useState([]);
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


  // To find total no of organisations
  const [data3, setData3] = useState([]);
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
        <div className='d-flex justify-content-around  m-3'>
          <div className='datadisplay1'>{data1.length} Users register</div>
          <div className='datadisplay2'> {data2.length} Hospitals register</div>
          <div className='datadisplay3'>{data3.length} Organisation register</div>
        </div>
        <h3 className='text-center text-danger'>Learn About Donation</h3>
        <div className='d-flex justify-content-between shadow-lg '>
          <img className="img-fluid bloodimg" src={img2} alt="" />
          <div className='bloodtype'>
            <div className='text-white bg-danger'>
              <h4 className='text-center'>Compatible Blood Type Donors</h4>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Blood Type</th>
                  <th scope="col">Donate Blood To</th>
                  <th scope="col">Receive Blood From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">A+</th>
                  <td>A+ AB+</td>
                  <td>A+ A- O+ O-</td>
                </tr>
                <tr>
                  <th scope="row">O+</th>
                  <td>O+ A+ B+ AB+ 	</td>
                  <td>O+ O-</td>
                </tr>
                <tr>
                  <th scope="row">B+</th>
                  <td>B+ AB+</td>
                  <td>B+ B- O+ O-</td>
                </tr>
                <tr>
                  <th scope="row">AB+</th>
                  <td>AB+</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <th scope="row">A-</th>
                  <td>A+ A- AB+ AB- 	</td>
                  <td>A- O-</td>
                </tr>
                <tr>
                  <th scope="row">O-</th>
                  <td>Everyone</td>
                  <td>O-</td>
                </tr>
                <tr>
                  <th scope="row">B-</th>
                  <td>B+ B- AB+ AB-</td>
                  <td>B- O-</td>
                </tr>
                <tr>
                  <th scope="row">AB-</th>
                  <td>AB+ AB-</td>
                  <td>AB- A- B- O-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h2 className='text-danger text-center mt-3'>TYPES OF DONATION</h2>
        <div className='content'>
          <p className='content1'>
            Each type of component has several medical uses and can be used for different medical treatments. your blood donation determines the best donation for you to make.
          </p>
          <p className='content1'>
            For
            <strong>plasma</strong>
            and
            <strong>platelet</strong>
            donation you must have donated whole blood in past two years
          </p>
          <p className='content1'>
            The human body contains five liters of blood, which is made of several useful components i.e
            <strong>Whole blood</strong>
            ,
            <strong>Platelet</strong>
            , and
            <strong>Plasma</strong>
            .
          </p>
        </div>
      </div>
    </LayoutHome>
  )
}

export default Home