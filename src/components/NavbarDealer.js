import React from 'react'
 import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

import { useNavigate } from "react-router";
const NavbarDealer = () => {

    const myUser = JSON.parse(localStorage.getItem("myUser"));
    const navigate = useNavigate();
    
    const dealerLogout = () => {
      if (myUser != null) {
        localStorage.removeItem("myUser");
        localStorage.clear();
        alert("You have successfully logot.........");
        navigate("/");
      }
    };
    return (

        <nav className="navbar navbar-expand-lg " variant="dark" style={{backgroundColor: 'black'}}>
              <img  style={{width: "90px" , height: "70px",
        backgroundSize: "contain",
         backgroundRepeat: "no-repeat",
          backgroundPosition: "center"}}
                                
       
         src='https://www.cropgrowth.com/wp-content/uploads/2018/11/logo-crop-growth2.png'/>
            <div className="container-fluid">
                <a className="navbar-brand" href='' style={{fontSize:"40px"}} >Crop Deal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"style={{fontSize:"30px"}} >
                            <a className="nav-link active" aria-current="page" href="/dealerprofile">MyProfile</a>
                        </li>
                        <li className="nav-item" style={{fontSize:"30px"}} >
                            <a className="nav-link" href="/viewallcrops">Crops</a>
                        </li>
                       
              <li className="nav-item" style={{marginTop:"", marginLeft:"190%",fontSize:"30px"}}>
                <Link to="/" className="nav-link" onClick={dealerLogout}>
                  <small>Logout</small>
                </Link>
              </li>
                        {/*      
                    onClick={() => setShow(true)}   */}



                <li className="nav-item" style={{marginTop:"3%",fontSize:"30px"}} >
                <Link to="/cart" className="nav-link"         >

                 <i class="fa fa-cart-plus"></i>
                 {/* onClick={() => setShow(true)}   */}
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
export default NavbarDealer;
