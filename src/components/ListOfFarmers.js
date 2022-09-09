import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";




function ListOfAllFarmers() {
  const [farmers, setFarmers] = useState([]);

  
  useEffect(()=>{

    fetch("http://localhost:9003/farmer/allFarmers").then(result=>{
        result.json().then(
            resp=>{
                setFarmers(resp)
            }
        )
    })
 },[])


  // const fetchAll = () => {
  //   axios

  //     .get("http://localhost:9002/dealer/allDealers")
  //     .then((resp) => setDealers(resp.data));
  // };
  // useEffect(fetchAll, []);

  return (
    <div className="container">
      <NavbarAdmin/>
      <br /> <br /> <br /> <br />
      <div style={{ fontSize: "30px" }} className="backprevious">
        
        <a class="previous">&laquo;</a>
        <Link
          to="/admin/page"
          style={{ color: "chocolate" }}
          className="previous round"
        >
          Back
        </Link>
      </div>
      <h4
        style={{
          color: "red",
          backgroundColor: "powderblue",
          fontSize: "40px",
        }}
        className="text-center"
      >
        List All Farmers
      </h4>
      <hr />
      <table className="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Farmer Id</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>PhoneNumber</th>
            <th>Location</th>
            <th>User Name </th>
            <th>About </th>
            <th colSpan={1}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((f, index) => (
            <tr class="table-info" key={index}>
              <td>{f.farmerId}</td>
              <td>{f.firstName}</td>
              <td>{f.lastName}</td>
              <td>{f.email}</td>
              <td>{f.phoneNumber}</td>
              <td>{f.location}</td>
              <td>{f.username}</td>
              <td>{f.about}</td>

              {/* <td>
                <Link
                  to={`/dealer/get/${s.dealerId}`}
                  className="btn btn-primary mb-2"
                >
                  View
                </Link>
              </td> */}

              <td>
                <Link
                  to={`/farmer/delete/${f.farmerId}`}
                  className="btn btn-primary mb-2"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ListOfAllFarmers;
