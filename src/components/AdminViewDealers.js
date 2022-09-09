import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";


function AdminViewDealers() {
  const [dealers, setDealers] = useState([]);

  
  useEffect(()=>{

    fetch("http://localhost:9002/dealer/allDealers").then(result=>{
        result.json().then(
            resp=>{
              setDealers(resp)
            }
        )
    })
 },[])


  

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
          fontSize: "30px",
        }}
        className="text-center"
      >
        List All Dealers
      </h4>
      <hr />
      <table className="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th>DealerId</th>
            <th>Firstname</th>
            <th>LastName</th>
            <th>Email Id</th>
            <th>PhoneNumber</th>
            <th>User Name </th>

            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dealers.map((s, index) => (
            <tr class="table-info" key={index}>
              <td>{s.dealerId}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.email}</td>
              <td>{s.phoneNumber}</td>
              <td>{s.username}</td>

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
                  to={`/dealer/delete/${s.dealerId}`}
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
export default AdminViewDealers;
