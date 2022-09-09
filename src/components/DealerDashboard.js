import React from 'react'
import NavbarDealer from './NavbarDealer';
import "../styles/DealerDashboard.css";
// import { useNavigate } from 'react-router';
 


export default function DealerDashboard() {


    const myUser =JSON.parse(localStorage.getItem("myUser"));
    // const navigate = useNavigate();

    // const logoutButton =()=>{
    //     if(myUser != null){
    //         localStorage.removeItem("myUser");
    //         localStorage.clear();
    //         alert("You have successfully logot.........");
    //         navigate("/")
    //     }
// }
  return (
    <div className="dealerdashbg">
      <NavbarDealer/> 
   <br/><br/><br/><br/>
        <div>
        
        <h2>Welcome {myUser.firstName}</h2>
        </div>

      

</div>




  )
}
