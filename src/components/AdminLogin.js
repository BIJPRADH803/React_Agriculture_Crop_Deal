import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Navbar from './Navbar';
import Footer from './Footer';

const AdminLogin = ()=> {
    const paperStyle = { padding: '80px 30px', width: '500', backgroundColor: "white" }
    const [loginForm, setLoginForm] = useState({
        name: "",
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
        if (!loginForm.name) {
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
                name: loginForm.name,
                password: loginForm.password
            }
            // http://localhost:9003/farmer/farmer-login?password=Ajay%40123&username=ajubabu
         
            axios
            .post(
                "http://localhost:9006/admin/login" +
                  payload).then(resp => {
                console.log(resp.data);
                alert("Welcome " + resp.data.name);
//...............................................................................
                //local storage to show our details
                let admin={

                    id:resp.data.id,
                    name: resp.data.name
                }
                localStorage.setItem("myUser",JSON.stringify(admin));
//................................................................................

                navigate("/admin/dashborad");
            }).catch(error => {
                console.log(error.response);
                alert("login failed");
            })
        }
        event.preventDefault();
    }
    const myStyle = {
        backgroundImage:
            "url('https://img.freepik.com/free-vector/man-sitting-desk-unlocking-computer-computer-settings-login-flat-illustration_74855-20645.jpg?t=st=1652343984~exp=1652344584~hmac=5bb25b3a0769609b06d1367aae4486423709f5333a0abf8727b91efaa20cf991&w=740')",
        height: '100vh',
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <div style={myStyle}>
             <Navbar />
            <div style={{
                position: 'absolute', left: '70%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                

                <Container style={paperStyle}>

                    <div className="row h-100 justify-content-center align-items-center">
                        <div className='col-10 col-md-8 col-lg-12'>
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <input type="text" name="name" id="name" className="form-control" value={loginForm.name} onChange={handleChange} />
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
                                {/* <p></p>
                                {/* New User? Register <a href="/signup">REGISTER</a> */}
                                {/* <Link to="/dealer/signup" >
                                New Dealer? Register Here
                                    </Link>  */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer/>
        </div>

    )
}
export default AdminLogin;