import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import '../styles/DealerViewProfile.css'

// import { Link } from "react-router-dom";

function FarmerViewProfile() {



  const [farmer, setFarmer] = useState(null);

  const { farmerId } = useParams();

 

//   const fetchFarmerById = () => {
//     axios
//       .get("http://localhost:9003/farmer/get/" + farmerId)
//       .then((resp) => setFarmer(resp.data));
//   };

//   useEffect(() => {
//     fetchFarmerById()
// }, [])

  
useEffect(()=>{

  fetch("http://localhost:9003/farmer/get/" + farmerId).then(result=>{
      result.json().then(
          resp=>{
            setFarmer(resp)
          }
      )
  })
},[])

  return (
    <div>
   
      <h1 style={{ textAlign: "center", marginTop: "75px" }}>Farmer </h1>
      <div className="card-view" style={{ marginTop: "50px" }}>
         <img src="assets/images/avatar.svg" alt="Avatar" style={{ width: "0%" }} /> 
        <div className="container-farmer" style={{ textAlign: "left" }}>
          {farmer !== null && (
            <div>
              <p>Farmer Id:{farmer.farmerId} </p>
              <p>First Name : {farmer.firstName}</p>
              <p>Last Name : {farmer.lastName}</p>
              <p>Phone  Number:{farmer.phoneNumber}</p>
              <p>Email Id: {farmer.email}</p>
               <p>User Name : {farmer.username}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default FarmerViewProfile;
