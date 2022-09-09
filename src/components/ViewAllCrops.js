import React from "react";
import { useState, useEffect } from "react";
import "../styles/ViewAllCrops.css";
import Navbar from "./Navbar";
import { Col, Container, Row } from "reactstrap";
import Footer from "./Footer";
// import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
const ViewAllCrops = () => {
  // const [cropName, setcropName] = useState(0);
    const navigate = useNavigate();
  // const {addItem}=useCart();
  const [crops, setCrops] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9001/crop/allCrops").then((result) => {
      result.json().then((resp) => {
        setCrops(resp);
      });
    });
  }, []);

//   const handleChange = (event) => {
//     settransactionId(event.target.value);
// }
// const handleSubmit = (event) => {
//     // settransactionId(event.target.value);
//     axios.get("http://localhost:8081/api/edu/get/" + cropName).then(resp => setPayment(resp.data))
// }


  return (
    <div>
      <Navbar />
      <Container fluid>
        <span>
          <h3> Crops Availbale</h3>
        </span>
        <hr/>
        {/* <div>
                <label>Transaction ID</label>
                <input type="number" name="transactionId" value={cropName} onChange={handleChange} />
                <button onClick={handleSubmit}>Search</button>
            </div> */}
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
                    <p>
                      <b>Price - {crop.price}Rs/TONNE</b>
                    </p>
                    <h6><strong>Farmer:{crop.farmerName}</strong></h6>
                    {/* <a href="/dealer/login" class="btn btn-outline-primary stretched-link">Buy Now</a> */}
                    {/* <a href="" class="btn btn-outline-primary stretched-link">AddToCart</a> */}
                    {/* <button  className='btn btn-warning' onClick={()=>addItem(data)}>Add to Cart</button> */}
                    {/* <button  className='btn btn-warning'>Add to Cart</button>  */}

                    <div>
                      <button
                        class="btn btn-outline-success"
                        onClick={() => {
                          navigate(`/dealer/login`);
                        }}
                      >
                        BuyNow
                      </button>
                      &nbsp;&nbsp;
                      <button
                        class="btn btn-outline-secondary"
                        onClick={() => {
                          navigate(`/dealer/login`);
                        }}
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
export default ViewAllCrops;
