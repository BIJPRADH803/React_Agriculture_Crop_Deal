import React from "react";
import { useState, useEffect } from "react";
import "../styles/ViewAllCrops.css";
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from "reactstrap";
import Footer from "./Footer";
import NavbarDealer from "./NavbarDealer";



const DealerViewAllCrops = ({handleClick}) => {
    const navigate = useNavigate();
    const [crops, setCrops] = useState([]);
    useEffect(() => {
    fetch("http://localhost:9001/crop/allCrops").then((result) => {
      result.json().then((resp) => {
        setCrops(resp);
      });
    });
  }, []);

  return (
    <div>
      <NavbarDealer />
      <Container fluid>
        <span>
          <h3> Crops Availbale</h3>
        </span>

        <Row>
          {crops.map((crop, index) => (
            <Col sm="4">
              <div
                className="card w-55 shadow-lg  mb-5 bg-white rounded"
                style={{ width: 400 }}
              >
                <img
                  className="card-img mx-auto"
                  src={crop.imageUrl}
                  alt="Card image"
                  style={{ width: 220, height: 220 }}
                />
                <div className="card-body text-center">
                  <div className="details">
                    <h3>{crop.cropName}</h3>
                    <p><b>Price - {crop.price}Rs/TONNE</b></p>
                    <h6><strong>Farmer:{crop.farmerName}</strong></h6>
                    
                    <div>
                      <button 
                      class="btn btn-outline-success"
                        
                        onClick={() => {
                          navigate(`/payment`);
                        }}
                      >
                        BuyNow
                      </button>
                      &nbsp;&nbsp;
                      <button
                      class="btn btn-outline-secondary"
                        
                      onClick={() => handleClick(crop)}
                      >
                        AddToCart
                      </button>
                    </div>
                 
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
export default DealerViewAllCrops;
