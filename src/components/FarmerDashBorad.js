import React from 'react'
import Footer from './Footer';
import NavbarFarmer from './NavbarFarmer';
import "../styles/FarmerDashBoard.css";
// import { useNavigate } from 'react-router';





export default function FarmerDashBoard() {


    const myUser =JSON.parse(localStorage.getItem("myUser"));
    // const navigate = useNavigate();

 
  return (
    <div className='farmerdashbg'>
       <NavbarFarmer/>
   <br/><br/><br/><br/>
        <div>
        
        <h2>Welcome {myUser.firstName}</h2>
        </div>

      
 <Footer/>
</div>




  )
}
