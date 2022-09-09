import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles/FarmerLogin.css"
const FarmerLogin = ()=> {
    const paperStyle = { padding: '80px 30px', width: '500', backgroundColor: "white" }
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        setLoginForm(loginForm => ({ ...loginForm, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        //validation login form
        let errors = {};
        if (!loginForm.username) {
            errors["usernameErr"] = "Username is required"
        }
        if (!loginForm.password) {
            errors["passwordErr"] = "Password is required"
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        // if no errors call the login api
        if (noErrors) {
           
            let payload = {
                username: loginForm.username,
                password: loginForm.password
            }
            // http://localhost:9003/farmer/farmer-login?password=Ajay%40123&username=ajubabu
         
            axios
            .post(
                "http://localhost:9003/farmer/farmer-login?password=" +
                loginForm.password +
                "&username=" +
                loginForm.username, payload).then(resp => {
                console.log(resp.data);
                alert("Welcome " + resp.data.firstName);
//...............................................................................
                //local storage to show our details
                let user={

                    dealerId:resp.data.dealerId,
                    firstName: resp.data.firstName
                }
                localStorage.setItem("myUser",JSON.stringify(user));
//................................................................................

                navigate("/farmer/dashborad");
            }).catch(error => {
                console.log(error.response);
                alert("login failed");
            })
        }
        event.preventDefault();
    }
    // const myStyle = {
    //     backgroundImage:
    //         "url('https://otbsalessolutions.com/wp-content/uploads/2021/08/Farmer-standing-in-field.jpg')",
    //     height: '600px',
     
      
    //     // backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // };


    return (
        // <div style={myStyle}>
        <div className='farmerloginbg'>
             <Navbar />
            <div style={{
                position: 'absolute', left: '80%', top: '40%',
                transform: 'translate(-50%, -50%)'
            }}>
                
                {/* <h2>Farmer </h2> */}
                <Container style={paperStyle}>
                    <h2><u>Farmer</u> </h2>
                    <div className="row h-100 justify-content-center align-items-center">
                   
                        <div className='col-10 col-md-8 col-lg-12'>
                          
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <input type="text" name="username" id="username" className="form-control" value={loginForm.username} onChange={handleChange} />
                                {
                                    formErrors.usernameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.usernameErr}</div>
                                }
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input type="password" name="password" id="password" className="form-control" value={loginForm.password} onChange={handleChange} />
                                {
                                    formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                                }
                            </div>

                            <div>

                                <button onClick={handleSubmit} className="btn btn-primary">Login</button><br />
                                
                                {/* New User? Register <a href="/signup">REGISTER</a> */}
                                <Link to="/farmer/signup" >
                                New Farmer? Register Here
                                    </Link> 
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer/>
        </div>

    )
}
export default FarmerLogin;