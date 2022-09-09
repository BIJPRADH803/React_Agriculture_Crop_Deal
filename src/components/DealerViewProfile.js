import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import '../styles/DealerViewProfile.css'

// import { Link } from "react-router-dom";

function DealerViewProfile() {

  const [dealer, setDealer] = useState(null);

  const { dealerId } = useParams();

 
  useEffect(()=>{

    fetch("http://localhost:9002/dealer/get/"+dealerId).then(result=>{
        result.json().then(
            resp=>{
              setDealer(resp)
            }
        )
    })
 },[])
  
//   const fetchDealerById = () => {
//     axios
//       .get("http://localhost:9002/dealer/get/" + dealerId)
//       .then((resp) => setDealer(resp.data));
//   };

//   useEffect(() => {
//     fetchDealerById()
// }, [])




  return (
    <div>
   
      <h1 style={{ textAlign: "center", marginTop: "75px" }}>Dealer </h1>
      <div className="card-view" style={{ marginTop: "50px" }}>
          <img  src="assets/images/avatar.svg" alt="Avatar" style={{ width: "100%" }} /> 
        <div className="container-student" style={{ textAlign: "center" }}>
          {dealer !== null && (
            <div>
              <p>Dealer Id:{dealer.dealerId} </p>
              <p>First Name : {dealer.firstName}</p>
              <p>Last Name : {dealer.lastName}</p>
              <p>Phone  Number:{dealer.phoneNumber}</p>
              <p>Email Id: {dealer.email}</p>
               <p>User Name : {dealer.username}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default DealerViewProfile;
