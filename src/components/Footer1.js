import React from 'react';
import '../styles/Footer1.css';
import { Link } from 'react-router-dom';


function Footer1() {
  return (

      <div className='footer-container' id='image' >
        <div>
        <img style={{height:"300px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQshbEF2D277vU6VYZ8bddBFYMwi6nsKFeeZ5iL0Sayo9vcvbTmXlUyj4XvcoY9GZ5XWk&usqp=CAU' />
        {/* <img style={{height:"300px",marginRight:"300px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fimizrN_AyA6SV9pPdABRAfe0P9eXPOC32yrZvHpCd-jerRHBO9xAjgNrfuQdLGD1vY&usqp=CAU' /> */}
      
       <img  style={{height:"300px",marginRight:"0px"}} src='https://www.spmrf.org/wp-content/uploads/2020/02/agriculture.jpg'/>
       </div>
            <section className='footer-subscription'>
          <p className='footer-subscription-heading'>

           
          </p>

        </section>

        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              {/* <h2>About Us</h2> */}
              <img src="https://cdn1.vectorstock.com/i/thumb-large/95/70/logotype-of-agriculture-logo-with-a-field-vector-20999570.jpg" class="card-img-top" alt="..." />
              {/* <Link to='/'>Making cars clean, shiny and glossy is our main specialty! On par with dedicated and thorough exterior and interior washing services, we also offer such detailing help as interior vacuuming, polishing, waxing and many others...</Link> */}

            </div>

          </div>






          <div class='footer-link-items' id='Contact'>
              <h2>Contact Us</h2>
            <Link to='/'>We are open,</Link>
            <Link to='/'> Mon-sat 09:00 am - 09:00 pm</Link>
            <Link to='/'>Contact
              (+91) 6372196327</Link>
              
            <Link to='/'>We're HERE
              Sidhapura, Plat no:213,
              Nallurahali,Bengaluru
             - 560066</Link>

          </div>

        </div>
        <section class='social-media' >
          <div class='social-media-wrap' >
          <img style={{marginLeft:"20%",borderRadius:"100px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fimizrN_AyA6SV9pPdABRAfe0P9eXPOC32yrZvHpCd-jerRHBO9xAjgNrfuQdLGD1vY&usqp=CAU' /> 

            <div class='footer-logo' >

           
              <Link to='/'style={{marginLeft:"20%"}} className='social-logo'>
                Agriculture Crop-Deal 
                 {/* <i class="fab fa-swift"></i>  */}
              </Link>
            </div>
            <small class='website-rights'> </small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook' style={{color:"blue",marginLeft:"50%"}}
                to='/http://www.facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram' style={{color:"rgb(201, 15, 189)",marginLeft:"20%"}}
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube' style={{color:"red",marginLeft:"20%"}}
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter' style={{marginLeft:"20%"}}
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
            
            </div>
          </div>
        </section>
      </div>
   
  );
}

export default Footer1;