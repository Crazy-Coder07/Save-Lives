import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";
import moment from "moment";
import Chart from "react-apexcharts";


const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "IN_TOTAL",
        data: [],
      },
      {
        name: "OUT_TOTAL",
        data: [],
      },
      {
        name: "REMAINING_TOTAL",
        data: [],
      },
    ],
  });
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];
  //GET BLOOD GROUP DATA
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {

        const bloodGroups = [];
        const inArray = [];
        const outArray = [];
        const totalArray = [];

        data?.bloodGroupData.forEach((record) => {
          bloodGroups.push(record.bloodGroup);
          inArray.push(record.totalIn);
          outArray.push(record.totalOut);
          totalArray.push(record.availabeBlood);
        });

        setState((prevState) => ({
          ...prevState,
          options: {
            ...prevState.options,
            xaxis: {
              categories: bloodGroups, // Use categories instead of Bloodgroup
            },
          },
          series: [
            {
              ...prevState.series[0],
              data: inArray, // Use data instead of in
            },
            {
              ...prevState.series[1],
              data: outArray, // Use data instead of out
            },
            {
              ...prevState.series[2],
              data: totalArray, // Use data instead of total
            },
          ],
        }));
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //lifecycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  //get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card m-2 p-1"
            key={i}
            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
                {record.bloodGroup}
              </h1>
              <p className="card-text">
                Total In : <b>{record.totalIn}</b> (ML)
              </p>
              <p className="card-text">
                Total Out : <b>{record.totalOut}</b> (ML)
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Total Available : <b>{record.availabeBlood}</b> (ML)
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <div className="chart-container">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="500"
          />
        </div>
      </div>
      <div className="container my-3">
        <h1 className="my-3">Recent Blood Transactions</h1>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donar Email</th>
              <th scope="col">TIme & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
