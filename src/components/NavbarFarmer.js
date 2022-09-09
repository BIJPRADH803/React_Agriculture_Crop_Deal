import React from 'react'
 import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

import { useNavigate } from "react-router";
const NavbarFarmer = () => {

    const myUser = JSON.parse(localStorage.getItem("myUser"));
    const navigate = useNavigate();
    
    const farmerLogout = () => {
      if (myUser != null) {
        localStorage.removeItem("myUser");
        localStorage.clear();
        alert("You have successfully logot.........");
        navigate("/");
      }
    };
    return (

    <nav className="navbar navbar-expand-lg  " variant="dark" style={{backgroundColor: 'black'}}>

  <img  style={{width: "90px" , height: "70px",
        backgroundSize: "contain",
         backgroundRepeat: "no-repeat",
          backgroundPosition: "center"}}
                                
       
         src='https://www.cropgrowth.com/wp-content/uploads/2018/11/logo-crop-growth2.png'/>
            <div className="container-fluid">
                <a className="navbar-brand" href='' style={{fontSize:"30px"}} >Crop Deal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" style={{fontSize:"25px"}} aria-current="page" href="/farmer/profile/:farmerId">MyProfile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{fontSize:"25px"}}href="/farmerviewcrops">Crops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{fontSize:"25px"}}href="/alldealers">Dealers</a>
                        </li>
                       
                    <li className="nav-item">
                    <Link to="/" className="nav-link" style={{fontSize:"25px", marginLeft:"530%"}} onClick={farmerLogout}>
                  <small>Logout</small>
                   </Link>
                  </li>
                 </ul>
                    </div>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
               
            </div>
        </nav>
    )
}
export default NavbarFarmer;