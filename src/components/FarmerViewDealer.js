// import React from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {  Container,  Row } from "react-bootstrap";
import NavbarFarmer from "./NavbarFarmer";






function FarmerViewDealer() {
    const [dealer, setDealer] = useState(null);
    const {dealerId } = useParams();
    const fetchDealertById = () => {
      axios
        .get("http://localhost:9002/dealer/get/" + dealerId)
        .then((resp) => setDealer(resp.data));
    };
    useEffect(fetchDealertById, []);
  return (
    <Container>
   <NavbarFarmer/>
    <Row className="viewdealer">
      <div>
        <h1> <b>DEALER DETAILS by ID</b></h1>
        <hr />

        {dealer !== null && (
          <div>
            <h3 >
            DEALER ID: <b style={{ color: "rgb(79, 231, 229)" }}>  {dealer.dealerId}</b>
            </h3 >
            <h3 >
            
           FIRST NAME  : <b style={{ color: "rgb(79, 231, 229)" }}>  {dealer.firstName}</b>
            </h3>
            <h3 >
            
          LAST NAME  : <b style={{ color: "rgb(79, 231, 229)" }}>  {dealer.lastName}</b>
             </h3>
            <h3 >
            PHONE NUMBER  : <b style={{ color:"rgb(79, 231, 229)" }}> {dealer.phoneNumber}</b>
            </h3>
            <h3 >
             
            EMAIL :  <b style={{ color: "rgb(79, 231, 229)" }}>  {dealer.email}</b>
            </h3>
            
          </div>
        )}
      </div>
    </Row>
  </Container>
  )
}

export default FarmerViewDealer