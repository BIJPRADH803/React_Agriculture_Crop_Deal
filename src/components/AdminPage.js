import React from 'react'
import Footer from './Footer';

import "../styles/AdminPage.css";
import NavbarAdmin from './NavbarAdmin';
// import { useNavigate } from 'react-router';





export default function AdminPage() {


    const myUser =JSON.parse(localStorage.getItem("myUser"));
    // const navigate = useNavigate();

 
  return (
    <div className='adminbgpage'>
       <NavbarAdmin/>
   <br/><br/><br/><br/>
        <div>
        {/* <h1>Admin page</h1> */}
         {/* <h2>Welcome {myUser.name}</h2>  */}
        </div>

      
 <Footer/>
</div>




  )
}
