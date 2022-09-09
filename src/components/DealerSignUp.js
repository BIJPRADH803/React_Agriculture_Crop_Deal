import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
import "../styles/DealerSignUp.css";
import { Form } from "reactstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DealerSignUp = () => {
//   var auth = JSON.stringify(localStorage.getItem("auth"));
//   console.log("this is auth string :" + auth);

  // const paperStyle = { padding: '45px 30px', width: '500', backgroundColor: "white", borderRadius: 20, }

  const navigate = useNavigate();
  const [dealer, setDealer] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setDealer((dealer) => ({
      ...dealer,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    //validate add dealer form
    let errors = {};
    // const isValid=isValid();
    if (!dealer.firstName) {
      errors["firstNameErr"] = "firstName is required";
    }
    if (typeof dealer.firstName !== "undefined") {
      var pattern = new RegExp(/^[A-Za-z]+$/);
      if (!pattern.test(dealer.firstName)) {
        errors["firstNameErr"] =
          "Please type only character not number or special character";
      }
    }

    if (!dealer.lastName) {
      errors["lastNameErr"] = "lastName is required";
    }

    if (typeof dealer.lastName !== "undefined") {
      var pattern = new RegExp(/^[A-Za-z]+$/);
      if (!pattern.test(dealer.lastName)) {
        errors["lastNameErr"] =
          "Please type only character not number or special character";
      }
    }

    if (!dealer.email) {
      errors["emailErr"] = "emailId is required";
    }

    if (!dealer.email) {
      errors["emailErr"] = "Please enter your email Address.";
    }

    if (typeof dealer.email !== "undefined") {
      var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      if (!pattern.test(dealer.email)) {
        errors["emailErr"] = "Please enter valid email address.";
      }
    }

    if (!dealer.phoneNumber) {
      errors["phoneNumberErr"] = "phoneNumber is required";
    }

    if (typeof dealer.phoneNumber !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(dealer.phoneNumber)) {
        // isValid = false;
        errors["phoneNumberErr"] = "Please enter only number.";
      } else if (dealer.phoneNumber.length != 10) {
        // isValid = false;
        errors["phoneNumberErr"] = "Please enter valid phone number.";
      }
    }

    if (!dealer.username) {
      errors["usernameErr"] = "userName is required";
    }
    if (!dealer.password) {
      errors["passwordErr"] = "password is required";
    }

    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const payload = {
        firstName: dealer.firstName,
        lastName: dealer.lastName,
        emailId: dealer.email,
        phoneNumber: dealer.phoneNumber,
        username: dealer.username,
        password: dealer.password,
      };
      axios.post("http://localhost:9002/dealer/save", payload).then((resp) => {
        alert(
          resp.data.role +
            " Registered Successfully Redirecting to Dealerlogin page.."
        );
        navigate("/dealer/login");
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
              <h1 style={{ fontSize: "40px" }}>Enter details to register</h1>
            </center>
            <p></p>

            <div className="form-group">
              <label htmlFor="firstName">First Name </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={dealer.firstName}
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
                value={dealer.lastName}
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
                value={dealer.phoneNumber}
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
                value={dealer.email}
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
                value={dealer.username}
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
                value={dealer.password}
                onChange={handleChange}
              />
              {formErrors.passwordErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.passwordErr}
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

            <Link to="/dealer/login">Already User? Login here.</Link>
          </div>
        </Form>
      </div>

        <Footer/>
    </div>
    </div>
  );
};
export default DealerSignUp;
