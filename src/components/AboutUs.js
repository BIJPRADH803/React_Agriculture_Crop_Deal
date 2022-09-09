import React from 'react'
import Navbar from './Navbar';
import "../styles/Card.css";
import Footer from './Footer';
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div>

        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center"><u>ABOUT US</u></h1>
        </div>

        <div className='card'>
          <div class='cardbody'>
            <h1>OUR AIM</h1>
            The Purpose is to farmer  can easily sell her crops to the Dealer . 
            <p className=' col-sm d-felx display fw-bloder '></p>
            <p>
                    <b style={{ fontSize: "large" }}>
                    A cropping system is defined as the cropping pattern and its management to derive benefits from a given resource base under a specific environmental condition.
                     The productive base of cropping system is plant growth, which is influenced by management and environment. <br />
                    </b>
                  </p>
            <hr />
            <div class="nice">
              <div class="card-body">
                <h1>All About Agriculture Crop System </h1>
                Agriculture is the backbone of the Indian Economy"- said Mahatma Gandhi six decades ago.
                 Even today, the situation is still the same, 
                with almost the entire economy being sustained by agriculture, which is the mainstay of the villages. 
                It contributes 16% of the overall GDP and accounts for employment of approximately 52% of the Indian population.
                 Rapid growth in agriculture is essential not only for self-reliance but also to earn valuable foreign exchange.

                 Indian farmers are second to none in production and productivity despite of the fact that millions are marginal and small farmers. 
                 They adopt improved agriculture technology as efficiently as farmers in developed countries. It is felt that with provision of timely and adequate inputs such as fertilizers, seeds, pesticides and by making available affordable agricultural credit /crop insurance, Indian farmers are going to ensure food and nutritional security to the Nation.It is envisaged to make available relevant information and services to the farming community and private sector through the use of information and communication technologies, to supplement the existing delivery channels provided for by the department. 
                 Farmer's Portal is an endeavour in this direction to create one stop shop for meeting all informational needs relating to Agriculture, Animal Husbandry and Fisheries sectors production, sale/storage of an Indian farmer. With this Indian Farmer will not be required to sift through maze of websites created for specific purposes.Once in the Farmers’ Portal, a farmer will be able to get all relevant information on specific subjects around his village/block /district or state. This information will be delivered in the form of text, SMS, email and audio/video in the language he or she understands. These levels can be easily reached through the Map of India placed on the Home page. Farmers will also be able to ask specific queries as well as give valuable feedback through the Feedback module specially developed for the purpose.
              </div>
            </div>
            <hr/>
            
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="nice">
                  <img src="https://cdn2.vectorstock.com/i/1000x1000/88/51/agriculture-company-logo-design-template-vector-23998851.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="nice">
                  <img src="https://cdn1.vectorstock.com/i/thumb-large/95/70/logotype-of-agriculture-logo-with-a-field-vector-20999570.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
        <Footer/>
      </div>
    </>


  )
}

export default AboutUs;