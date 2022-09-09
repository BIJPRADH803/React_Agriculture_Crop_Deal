import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
import "../styles/FarmerSignUp.css";
import { Form } from "reactstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FarmerSignUp = () => {

    
//   var auth = JSON.stringify(localStorage.getItem("auth"));
//   console.log("this is auth string :" + auth);

  const paperStyle = { padding: '45px 30px', width: '500', backgroundColor: "white", borderRadius: 20, }

  const navigate = useNavigate();
  const [farmer, setFarmer] = useState({
    // "firstName": "ajay",
    // "lastName": "kumar",
    // "phoneNumber": "9438552324",
    // "username": "ajubabu",
    // "password": "Ajay@123",
    // "email": "ajay@gmail.com",
    // "location": "Rourkela",
    // "bank": "Axis Bank",
    // "accountNo": "123456789012312",
    // "bankbranch": "Uditanagr",
    // "about": "farmer from west odisha"
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: "",
    location:"",
    about:"",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFarmer((farmer) => ({
      ...farmer,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    //validate add dealer form
    let errors = {};
    // const isValid=isValid();
    if (!farmer.firstName) {
      errors["firstNameErr"] = "firstName is required";
    }
    if (typeof farmer.firstName !== "undefined") {
      var pattern = new RegExp(/^[A-Za-z]+$/);
      if (!pattern.test(farmer.firstName)) {
        errors["firstNameErr"] =
          "Please type only character not number or special character";
      }
    }

    if (!farmer.lastName) {
      errors["lastNameErr"] = "lastName is required";
    }

    if (typeof farmer.lastName !== "undefined") {
      var pattern = new RegExp(/^[A-Za-z]+$/);
      if (!pattern.test(farmer.lastName)) {
        errors["lastNameErr"] =
          "Please type only character not number or special character";
      }
    }

    if (!farmer.email) {
      errors["emailErr"] = "emailId is required";
    }

    if (!farmer.email) {
      errors["emailErr"] = "Please enter your email Address.";
    }

    if (typeof farmer.email !== "undefined") {
      var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      if (!pattern.test(farmer.email)) {
        errors["emailErr"] = "Please enter valid email address.";
      }
    }

    if (!farmer.phoneNumber) {
      errors["phoneNumberErr"] = "phoneNumber is required";
    }

    if (typeof farmer.phoneNumber !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(farmer.phoneNumber)) {
        // isValid = false;
        errors["phoneNumberErr"] = "Please enter only number.";
      } else if (farmer.phoneNumber.length != 10) {
        // isValid = false;
        errors["phoneNumberErr"] = "Please enter valid phone number.";
      }
    }

    if (!farmer.username) {
      errors["usernameErr"] = "userName is required";
    }
    if (!farmer.password) {
      errors["passwordErr"] = "password is required";
    }
    if (!farmer.location) {
        errors["locationErr"] = "Location is required";
      }
      if (!farmer.about) {
        errors["aboutErr"] = "About  is required";
      }
    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const payload = {
        firstName: farmer.firstName,
        lastName: farmer.lastName,
        emailId: farmer.email,
        phoneNumber: farmer.phoneNumber,
        username: farmer.username,
        password: farmer.password,
        location:farmer.location,
        about:farmer.about
      };
      axios.post("http://localhost:3/farmer/save", payload).then((resp) => {
        alert(
          resp.data.role +
            " Registered Successfully Redirecting to farmerlogin page.."
        );
        navigate("/farmer/login");
      });
    }
  };

  const myStyle = {
    backgroundImage:
      "url('https://media.istockphoto.com/photos/businessman-filling-online-registration-form-picture-id1013435204')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>  
         <Navbar />
         <br></br>
    <div style={myStyle}>
     
     
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Form>
          <div>
            <center>
              <h1 style={{ fontSize: "40px",marginTop:"170px" }}>Enter details to register</h1>
            </center>
            <p></p>

            <div className="form-group">
              <label htmlFor="firstName">First Name </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={farmer.firstName}
                onChange={handleChange}
              />
              {formErrors.firstNameErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.firstNameErr}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name </label>
              <input
                type="text"
                className="form-control"

                name="lastName"
                value={farmer.lastName}
                onChange={handleChange}
              />
              {formErrors.lastNameErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.lastNameErr}
                </div>
              )}
            </div>


            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                className="form-control"
                name="phoneNumber"
                value={farmer.phoneNumber}
                onChange={handleChange}
              />
              {formErrors.phoneNumberErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.phoneNumberErr}
                </div>
              )}
            </div>




            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={farmer.email}
                onChange={handleChange}
              />
              {formErrors.emailErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.emailErr}
                </div>
              )}
            </div>


             <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={farmer.username}
                onChange={handleChange}
              />
              {formErrors.usernameErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.usernameErr}
                </div>
              )}
            </div>

           

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={farmer.password}
                onChange={handleChange}
              />
              {formErrors.passwordErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.passwordErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="location"
                className="form-control"
                name="location"
                value={farmer.location}
                onChange={handleChange}
              />
              {formErrors.locationErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.locationErr}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="about">About</label>
              <input
                type="about"
                className="form-control"
                name="about"
                value={farmer.about}
                onChange={handleChange}
              />
              {formErrors.aboutErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.aboutErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
      <Link to="/farmer/login">Already User? Login here.</Link>
          </div>
        </Form>
      </div>

        {/* <Footer/> */}
    </div>
    </div>
  );
};
export default FarmerSignUp;
