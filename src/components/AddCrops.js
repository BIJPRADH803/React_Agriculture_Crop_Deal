import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Card.css";
import { useNavigate } from 'react-router';
import { Card, Container } from "reactstrap";
import NavbarFarmer from "./NavbarFarmer";
// import { Link } from 'react-router-dom';

const AddCrops = () => {
  const paperStyle = {
    padding: "45px 30px",
    width: "500",
    backgroundColor: "white",
    borderRadius: 20,
  };

  const [crop, setCrop] = useState({
    cropName: "",
    cropType: "",
    price: "",
    quantity: "",
    address: "",
    imageUrl: "",
  });
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setCrop((previousvalue) => {
      console.log(previousvalue.data);
      return {
        ...previousvalue,
        [name]: value,
      };
    });
  };

  const showdata = (event) => {
    event.preventDefault();
    let errors = {};

    if (!crop.cropName) {
      errors["cropNameErr"] = "Crop Name is required";
    }
    if (!crop.cropType) {
      errors["cropTypeErr"] = "CropType is required";
    }
    if (!crop.price) {
      errors["priceErr"] = "price is required";
    }
    if (!crop.quantity) {
      errors["quantityErr"] = "quantity is required";
    }
    if (!crop.address) {
      errors["addressErr"] = "address is required";
    }

    if (!crop.imageUrl) {
      errors["imageUrlErr"] = "Image is required";
    }

    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const payload = {
        cropName: crop.cropName,
        cropType: crop.cropType,
        price: crop.price,
        quantity: crop.quantity,
        address: crop.address,
        imageUrl: crop.imageUrl,
      };

      try {
        if (
          //http://localhost:9001/crop/addCrop
          axios
            .post("http://localhost:9001/crop/addCrop", payload)
            .then((response) => {
              console.log(response.data);
            })
        ) {
          alert("crop added successfully.......... ");
          navigate(-1);
        }
      } catch (error) {
        console.log("error is", error);
      }
    }
  };

  const myStyle = {
    backgroundImage:
      "url('https://cdn.learnwoo.com/wp-content/uploads/2016/11/Adding-Products_Cropped.png')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
    <NavbarFarmer/>
    <div style={myStyle}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* <CardBody> */}
        <Card className="center">
          <Container style={paperStyle}>
            <div>
              <center>
               {/*  https://cdn1.vectorstock.com/i/thumb-large/95/70/logotype-of-agriculture-logo-with-a-field-vector-20999570.jpg*/}
                <img
                //   src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                src="https://cdn2.vectorstock.com/i/1000x1000/88/51/agriculture-company-logo-design-template-vector-23998851.jpg"
                  alt="Profile"
                  width="50"
                  height="50"
                ></img>{" "}
              </center>{" "}
              <p></p>
              <center>
                <h1 style={{ fontSize: "20px" }}>Add Crops</h1>
              </center>
              <p></p>
              <div className="cropName">
              {/* <label>Crop Name </label> */}
                <input
                  className="form__input"
                  type="text"
                  id="cropName"
                  name="cropName"
                  placeholder="Crop Name"
                  value={crop.cropName}
                  onChange={inputEvent}
                />
                {formErrors.cropNameErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.cropNameErr}
                  </div>
                )}
              </div>

              <div className="croptype">
                
                <label>Crop Type</label>

                <select
                  name="cropType"
                  value={crop.cropType}
                  onChange={inputEvent}
                >
                  <option value="">select</option>
                  <option value="vegetables">Vegetable</option>
                  <option value="fruit">Fruit</option>
                </select>
                {formErrors.croptypeErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.croptypeErr}
                  </div>
                )}
              </div>
              <div className="price">
              {/* <label>Price </label> */}
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="form__input"
                  placeholder="Prices for 1 Tonne"
                  value={crop.price}
                  onChange={inputEvent}
                />
                {formErrors.priceErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.priceErr}
                  </div>
                )}
              </div>
              <div className="quantity">
              {/* <label>Quantity</label> */}
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="form__input"
                  placeholder="Quantity in Tonne"
                  value={crop.quantity}
                  onChange={inputEvent}
                />
                {formErrors.quantityErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.quantityErr}
                  </div>
                )}
              </div>
              <div className="Address">
              {/* <label>Address</label> */}
                <input
                  className="form__input"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  value={crop.address}
                  onChange={inputEvent}
                />
                {formErrors.addressErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.addressErr}
                  </div>
                )}
              </div>

              <div className="imageUrl">
              {/* <label>Address</label> */}
                <input
                  className="form__input"
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Put Image URL"
                  value={crop.imageUrl}
                  onChange={inputEvent}
                />
                {formErrors.imageUrlErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.imageUrlErr}
                  </div>
                )}
              </div>
              <div className="footer">
                {/* <button type="submit" className="btn" onClick={showdata}>Add</button> */}
                {/* <button className="btn btn-primary" type="submit" onClick={showdata}>
                                    <Link to="/allcrops">
                                    Add
                                    </Link>
                                    </button> */}
                <div class="inner1">
                  <button className="btn btn-primary mb-2" onClick={showdata}>
                    Add
                  </button>
                </div>
                <div class="inner2">
                  <Link to="/farmerviewcrops" className="btn btn-danger">
               
                    Cancel{" "}
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default AddCrops;
