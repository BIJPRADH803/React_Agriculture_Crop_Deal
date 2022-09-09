import React from 'react'
import Footer from './Footer';
import Footer1 from './Footer1';

import Navbar from './Navbar';

 import Blink from 'react-blink-text';


const Home = () => {

  return (
    <>
      <Navbar />

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
       
  
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src=" https://media.istockphoto.com/photos/farmer-checking-the-quality-of-the-crop-in-a-field-of-sugarbeet-on-picture-id1256266672?k=20&m=1256266672&s=612x612&w=0&h=DqBwBWT3yaozoYZSztat8PNwGFJljQT-1UQQ-0Zo5Hc=" className="d-block w-100" alt="Background" height="500px" />
            {/* <h1 style={{paddingTop:"0px"}} className="blink_me"><center>WELCOME TO CROP DEAL SITE AND HAVE A HAPPY PURCHASING OF CROPS FROM FARM!</center></h1> */}
          </div>
          
          <div className="carousel-item">
            <img src="assets/images/mango1.jpg" className="d-block w-100" alt="Background" height="500px" />
          </div>

          <div className="carousel-item">
            <img src="assets/images/apple1.jpg" className="d-block w-100" alt="Background" height="500px" />
          </div>

         
          {/* https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ecologically_grown_vegetables.jpg/1200px-Ecologically_grown_vegetables.jpg */}
          <div className="carousel-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ecologically_grown_vegetables.jpg/1200px-Ecologically_grown_vegetables.jpg " className="d-block w-100"  alt="Backgroung" height="500px"  width="500px"/>
          </div>

          <div className="carousel-item">
            <img src="assets/images/tomato3.jpg" className="d-block w-100"  alt="Backgroung" height="500px" />
          </div>
          <div className="carousel-item">
            <img src="assets/images/mixfruit.jpg" className="d-block w-100"  alt="Backgroung" height="500px" />
          </div>
          <Blink color='yellow' text=' WELCOME TO CROP DEAL SITE AND HAVE A HAPPY PURCHASING OF CROPS FROM FARM!' fontSize='40px'/>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        
      </div>

      <Blink color='purple' text='Crops to Buy/Sell' fontSize='30px'/>
      <Footer1/> 
      <Footer/>

    </>

  )
}
export default Home;
