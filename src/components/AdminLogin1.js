import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 import "../styles/AdminLogin1.css";
 import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
// import { Navbar } from "react-bootstrap";
import Navbar from './Navbar';
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin1 = () => {
    const paperStyle = { padding: '80px 30px', width: '500', backgroundColor: "white" }
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPss] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passErr, setpassErr] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setNameErr(false);
  };
  const handlePass = (e) => {
    setPss(e.target.value);
    setpassErr(false);
  };
  const handleClick = () => {
    if (name && pass) {
      const data = {
        name: name,
        password: pass,
      };
      if (name === "Kunal" && pass === "Kunal@123") {
        axios
          .post("http://localhost:9006/admin/login", data)
          .then(function (response) {
             if (response && response.data) {
               if (response.data ==="logged in") {
                // alert("Admin login sucessfully.......");
                toast("Admin Login Sucessfully....... ");
                navigate("/admin/page");
              } 
              else {
                // alert("wrong credentials.");
                toast("wrong credentials.......... ");
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:9006/admin/login", data)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                // alert("Admin login Sucessfully.......");
                toast("Admin Login Sucessfully....... ");
                navigate("/admin/page");
              } else {
                // alert("wrong credentials.");
                toast("wrong credentials.......... ");
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } else if (name) {
      setpassErr(true);
      setNameErr(false);
    } else if (pass) {
      setNameErr(true);
      setpassErr(false);
    } else {
      setpassErr(true);
      setNameErr(true);
    }
  };
  const myStyle = {
    backgroundImage:
        "url('https://img.freepik.com/free-vector/man-sitting-desk-unlocking-computer-computer-settings-login-flat-illustration_74855-20645.jpg?t=st=1652343984~exp=1652344584~hmac=5bb25b3a0769609b06d1367aae4486423709f5333a0abf8727b91efaa20cf991&w=740')",
    height: '100vh',
    // backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

  return (
    // <div className="userbg">
    // <div>
    //   <h1 className="title1a">ADMIN LOGIN</h1>
    //   <div className="login-form">
    //     <div className="input-container">
    //       <label>Name</label>
    //       <input
    //         type="text"
    //         placeholder="  Enter Username"
    //         value={name}
    //         onChange={handleName}
    //       />
          
    //       {nameErr && <span>Enter valid name</span>}
          
    //       <br/>
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         placeholder="password"
    //         value={pass}
    //         onChange={handlePass}
    //       />  
    //      {passErr && <span>Enter valid password</span>}
    //     </div>
    //     <button
    //       className="Btn" onClick={handleClick}> 
    //     Submit
    //   </button>
    //   <div className="mrginlistalltrainer" style={{fontSize:"30Px",marginLeft:"40px", marginTop: "40px"}}> <a class="previous">&laquo;</a>

    // <Link to="/"  style={{color:"chocolate"}} className="previous round">Back</Link> </div>

    //  <div className='col-10 col-md-8 col-lg-6'style={{  marginTop: "60px" }}></div>
      
    //   </div>
    // </div>
    // </div>


    //alternate
    <div style={myStyle}>
    <Navbar />
   <div style={{
       position: 'absolute', left: '70%', top: '50%',
       transform: 'translate(-50%, -50%)'
   }}>
       
       <h2><u>Admin</u></h2>
       <Container style={paperStyle}>
              {/* <h2><u>Admin</u></h2> */}
           <div className="row h-100 justify-content-center align-items-center">
               <div className='col-10 col-md-8 col-lg-12'>
                   <div className='form-group'>
                       <label htmlFor='username'><b>Username</b></label>
                       <input type="text"
                        name="name" 
                        id="name"
                        placeholder="Enter Username"
                         className="form-control" 
                         value={name} onChange={handleName} />
                      
                        {nameErr && <span style={{ color: "red", paddingBottom: 10 }}>Enter valid name</span>}
                   </div>

                   <div className='form-group'>
                       <label htmlFor='password'><b>Password</b></label>
                       <input type="password" 
                       name="password"
                        id="password" 
                        placeholder=" Enter Password"
                        className="form-control" 
                        value={pass} onChange={handlePass} />
                      
                        {passErr && <span style={{ color: "red", paddingBottom: 10 }}>Enter valid password</span>}
                   </div>

                   <div>

                       <button onClick={handleClick} className="btn btn-primary">Login</button><br />
                       <ToastContainer/>
                      
                   </div>
               </div>
           </div>
       </Container>
   </div>
   <Footer/>
</div>


  );
};

export default AdminLogin1;